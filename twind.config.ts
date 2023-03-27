import { Options } from "$fresh/plugins/twind.ts";
export default {
  selfURL: import.meta.url,

  plugins:{
    /* daisyUI definitions of hero component */
    'hero': {
      'width': '100%',
        'background-position': '50%',
        'background-size': 'cover',
        'place-items': 'center',
        'display': 'grid',
        'justify-content': 'space-evenly',
    },
    'hero-overlay': {
        'height': '100%',
        'width': '100%',
        'background-color': 'hsl(var(--n)/var(--tw-bg-opacity))',
        '--tw-bg-opacity': '.5',
        'grid-row-start': '1',
        'grid-column-start': '1'
    },
    'hero-content': {
        'z-index': '0',
        'max-width': '80rem',
        'justify-content': 'center',
        'align-items': 'center',
        'gap': '1rem',
        'padding': '1rem',
        'display': 'flex'
    }
    },
} as Options;
