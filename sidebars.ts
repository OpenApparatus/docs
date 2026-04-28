import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  coreSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Core (.NET library)',
      link: {type: 'doc', id: 'core/overview'},
      items: [
        'core/installation',
        'core/architecture',
        'core/topology',
        'core/geometry',
        'core/determinism',
        'core/api-reference',
      ],
    },
    'contributing',
  ],
  studioSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Studio (desktop app)',
      link: {type: 'doc', id: 'studio/overview'},
      items: [
        'studio/installation',
        'studio/ui-tour',
        'studio/file-format',
        'studio/obj-export',
        'studio/architecture',
      ],
    },
    'contributing',
  ],
  unitySidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Unity (UPM package)',
      link: {type: 'doc', id: 'unity/overview'},
      items: [
        'unity/installation',
        'unity/floorplan-instance',
        'unity/editor-workflow',
        'unity/mesh-adapter',
        'unity/compatibility',
      ],
    },
    'contributing',
  ],
};

export default sidebars;
