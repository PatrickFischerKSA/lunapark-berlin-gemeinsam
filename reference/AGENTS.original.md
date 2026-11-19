<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the editorial webspecial as one scrolling content route, with focused reusable comparison and map modules, because its stations form one continuous reading experience.
- Load Leaflet dynamically behind ClientOnly and use standard OpenStreetMap tiles with attribution, because browser-only map imports must not enter SSR.
- Reader reflections stay in React state and are not published or stored, because this is a private reading interaction rather than a shared survey.
- Keep evidence references and source criticism in focused editorial modules; cite verified novel chapters and file-relative PDF pages, without publicly hosting the copyrighted book, so evidence is traceable without redistribution.
- Serve timed media descriptions as local WebVTT tracks and keep visible text equivalents alongside video, because media content must remain accessible without sound.
