// One-time source conversion. Re-run only intentionally: IDs correspond to original source positions.
import fs from 'node:fs';
import {parse} from '@babel/parser';
import tr from '@babel/traverse';
import gen from '@babel/generator';
import * as t from '@babel/types';
const traverse=tr.default || tr,generate=gen.default || gen;
const files=[['reference/Article.ported.tsx','src/Article.tsx'],...['editorial-evidence','source-notes','image-comparison'].map(n=>[`reference/src/components/${n}.tsx`,`src/components/${n}.tsx`])];
const textTags=new Set(['p','h1','h2','h3','h4','span','li','strong','em','a','Button','legend','label','figcaption','blockquote','dt','dd','button']);
for(const [input,output] of files){
 const ast=parse(fs.readFileSync(input,'utf8'),{sourceType:'module',plugins:['typescript','jsx']});let count=0;
 const id=(node)=>output.replace(/[^a-zA-Z0-9]/g,'_')+'_'+node.start;
 const text=(key,expression)=>t.jsxElement(t.jsxOpeningElement(t.jsxIdentifier('EditableText'),[t.jsxAttribute(t.jsxIdentifier('id'),t.stringLiteral(key)),t.jsxAttribute(t.jsxIdentifier('value'),t.jsxExpressionContainer(expression))],true),null,[],true);
 traverse(ast,{
  JSXElement:{exit(path){const op=path.node.openingElement;if(!t.isJSXIdentifier(op.name))return;if(['img','video'].includes(op.name.name)){const kind=op.name.name;op.name=t.jsxIdentifier('SharedMedia');op.attributes.push(t.jsxAttribute(t.jsxIdentifier('contentId'),t.stringLiteral(id(path.node))),t.jsxAttribute(t.jsxIdentifier('kind'),t.stringLiteral(kind)));if(path.node.closingElement)path.node.closingElement.name=t.jsxIdentifier('SharedMedia');}}},
  JSXText(path){if(!path.node.value.trim())return;const children=t.react.buildChildren(t.jsxFragment(t.jsxOpeningFragment(),t.jsxClosingFragment(),[path.node]));if(!children.length)return;path.replaceWith(text(id(path.node),children[0]));count++;path.skip();},
  JSXExpressionContainer(path){if(path.parentPath.isJSXAttribute()||!path.parentPath.isJSXElement())return;const parent=path.parentPath.node.openingElement.name;if(!t.isJSXIdentifier(parent)||!textTags.has(parent.name))return;const ex=path.node.expression;if(t.isJSXEmptyExpression(ex))return;
   // Personal reflections remain private React state, never shared editorial fields.
   if(t.isIdentifier(ex)&&['text','stance'].includes(ex.name))return;
   path.replaceWith(text(id(path.node),ex));count++;path.skip();}
 });
 ast.program.body.unshift(t.importDeclaration([t.importSpecifier(t.identifier('EditableText'),t.identifier('EditableText')),t.importSpecifier(t.identifier('SharedMedia'),t.identifier('SharedMedia'))],t.stringLiteral('@/components/shared-editor')));
 fs.writeFileSync(output,generate(ast,{retainLines:false}).code+'\n');console.log(output,count+' editorial fields');
}
