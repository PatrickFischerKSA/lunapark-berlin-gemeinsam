import {describe,it,expect} from 'vitest';
import {normalizeState,contentKey} from './document';
describe('Redaktionsdaten',()=>{it('ignoriert beschädigte Felder',()=>{expect(normalizeState({texts:{a:'gut',b:4},media:null})).toEqual({texts:{a:'gut'},media:{}});});it('ordnet dynamische Texte stabil verschiedenen Feldern zu',()=>{expect(contentKey('section','A')).toBe(contentKey('section','A'));expect(contentKey('section','A')).not.toBe(contentKey('section','B'));});});
