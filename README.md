# Rect-Svelte-Vue

A demo of implementing the same app on three different platforms.

## Motivation
I created this project to
   * learn some React and Svelte coding (I've been using Vue, mostly);
   * try out the WebPack v5;
   * immerse the strategy of famous 
     [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game.

The project started as my step-by-step track following the
[React tutorial](https://reactjs.org/tutorial/tutorial.html). However, since the commit
labeled "Renamed the project", it is different.

Here I implement the same mind boggling _TTT_ game on three platforms:
[_**React**_](https://reactjs.org/), [**_Svelte_**](https://svelte.dev/) and 
[_**Vue**_](https://vuejs.org/).
_Vue_ is the only one I am familiar with right now, so it will be the last.
I respectfully skip the [_Angular_](https://angularjs.org/) for aesthetic reasons.

As in case of any real project, the _Issues list_ will play its role.

## Platforms and impressions

### React
The original readme is [here](doc/react.md).

1. **Installation:** `npx create-react-app my-app` - that was basically all - yay!
1. **Concepts and learning:**
   - Very straight-forward and intuitive in the beginning.
   - From [Effect Hooks](https://reactjs.org/docs/hooks-effect.html) on,
   it took a little more effort to comprehend (not _how to_, but _what for_).

### Svelte
Not started.

### Vue
Webpack setup: https://vue-loader.vuejs.org/guide

### Other details
I decided to use a unified webpack configuration and keep all different source modules
in the same /src directory - kind of messy, but more fun - all three platforms use different
filename extensions, after all.
