const componentsList = {
  Home: {
    name: 'Home',
    tag: 'div',
    attributes: {},
    properties: {
      value: '',
      innerHTML: '',
      style: {
        height: '100%',
        width: '100%',
        display: 'flex'
      },
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Row: {
    name: 'Container',
    tag: 'div',
    attributes: {},
    properties: {
      value: '',
      innerHTML: '',
      style: {
        width: '200px',
        height: '150px',
        border: '1px dashed #000',
        display: 'flex'
      },
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Col: {
    name: 'Container',
    tag: 'div',
    attributes: {},
    properties: {
      value: '',
      innerHTML: '',
      style: {
        width: '200px',
        height: '150px',
        border: '1px dashed #000',
        display: 'flex',
        flexDirection: 'column'
      },
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Slot: {
    name: 'Container',
    tag: 'div',
    attributes: {},
    properties: {
      value: '<slot>',
      innerHTML: '',
      style: {
        width: '150px',
        height: '100px',
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
      },
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Text: {
    name: 'Text',
    tag: 'span',
    attributes: {},
    properties: {
      value: 'text',
      innerHTML: 'text',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Heading: {
    name: 'Heading',
    tag: 'h1',
    attributes: {},
    properties: {
      value: 'Heading',
      innerHTML: 'Heading',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Link: {
    name: 'Link',
    tag: 'a',
    attributes: {
      href: 'https://example.com',
      target: '_blank'
    },
    nativeAttributes: ['href', 'target'],
    properties: {
      value: 'Link',
      innerHTML: 'Link',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Image: {
    name: 'Image',
    tag: 'img',
    attributes: {
      src: '/workspace/assets/image.png',
      alt: 'alt_src',
      loading: ''
    },
    nativeAttributes: ['src', 'alt', 'loading'],
    properties: {
      innerHTML: '',
      style: {
        width: '100px',
        height: '100px'
      },
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Video: {
    name: 'Video',
    tag: 'video',
    attributes: {
      src: '/workspace/features/video.mp4',
      poster: '/workspace/assets/video.svg',
      controls: false,
      loop: false,
      muted: false,
      autoPlay: false,
      playsInline: false,
      preload: ''
    },
    nativeAttributes: [
      'src',
      'poster',
      'controls',
      'loop',
      'muted',
      'autoPlay',
      'playsInline',
      'preload'
    ],
    properties: {
      innerHTML: '',
      style: {
        width: '320px',
        height: '180px'
      },
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Iframe: {
    name: 'Iframe',
    tag: 'iframe',
    attributes: {
      src: 'https://www.youtube.com/embed/DeQkMK5LME4',
      allow: 'fullscreen',
      fullscreen: 'false'
    },
    nativeAttributes: ['src', 'allow', 'fullscreen'],
    properties: {
      innerHTML: '',
      style: {
        width: '320px',
        height: '200px'
      },
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Lottie: {
    name: 'Lottie',
    tag: 'Player',
    attributes: {
      src: 'https://web.aythen.com/workspace/features/lottie.json'
    },
    properties: {
      innerHTML: '',
      style: {
        width: '300px',
        height: '300px'
      },
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  List: {
    name: 'List',
    tag: 'ul',
    attributes: {},
    properties: {
      value: '',
      innerHTML: '',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  LItem: {
    name: 'LItem',
    tag: 'li',
    attributes: {},
    properties: {
      value: '',
      innerHTML: '',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Form: {
    name: 'Form',
    tag: 'form',
    attributes: {
      name: '',
      target: '',
      autoComplete: '',
      enctype: '',
      method: '',
      action: ''
    },
    nativeAttributes: [
      'name',
      'target',
      'autoComplete',
      'enctype',
      'method',
      'action'
    ],
    properties: {
      value: '',
      innerHTML: '',
      style: {
        width: '200px',
        height: '100px',
        display: 'flex'
      },
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Button: {
    name: 'Button',
    tag: 'button',
    attributes: {
      value: 'button'
    },
    nativeAttributes: ['value'],
    properties: {
      innerHTML: 'button',
      style: {
        padding: '8px 16px',
        borderRadius: '8px',
        border: '0.5px solid #3333ff',
        color: '#3333ff'
      },
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Label: {
    name: 'Label',
    tag: 'label',
    attributes: {
      for: ''
    },
    nativeAttributes: ['for'],
    properties: {
      value: '',
      innerHTML: '',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Input: {
    name: 'Input',
    tag: 'input',
    attributes: {
      type: 'text',
      name: '',
      value: '',
      placeholder: 'placeholder',
      disabled: false,
      required: false,
      autoFocus: false,
      autoComplete: ''
    },
    nativeAttributes: [
      'type',
      'name',
      'value',
      'placeholder',
      'disabled',
      'required',
      'autoFocus',
      'autoComplete'
    ],
    properties: {
      value: '',
      innerHTML: '',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Textarea: {
    name: 'Textarea',
    tag: 'textarea',
    attributes: {
      name: '',
      placeholder: '',
      cols: '',
      rows: '',
      disabled: false,
      autoFocus: false,
      autoComplete: ''
    },
    nativeAttributes: [
      'name',
      'placeholder',
      'cols',
      'rows',
      'disabled',
      'autoFocus',
      'autoComplete'
    ],
    properties: {
      value: '',
      innerHTML: '',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Checkbox: {
    name: 'Checkbox',
    tag: 'input',
    attributes: {},
    properties: {
      value: '',
      innerHTML: '',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Radio: {
    name: 'Radio',
    tag: 'input',
    attributes: {},
    properties: {
      value: '',
      innerHTML: '',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Select: {
    name: 'Select',
    tag: 'select',
    attributes: {
      name: '',
      multiple: false,
      size: '',
      disabled: false,
      required: false,
      autoFocus: false,
      autoComplete: ''
    },
    nativeAttributes: [
      'name',
      'multiple',
      'size',
      'disabled',
      'required',
      'autoFocus',
      'autoComplete'
    ],
    properties: {
      value: '',
      innerHTML: '',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Dropdown: {
    name: 'Dropdown',
    tag: 'div',
    attributes: {},
    properties: {
      value: '',
      innerHTML: '',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  },
  Navbar: {
    name: 'Navbar',
    tag: 'div',
    attributes: {},
    properties: {
      value: '',
      innerHTML: '',
      style: {},
      mediaQueries: {},
      clases: {},
      states: {}
    }
  }
}

module.exports = componentsList
