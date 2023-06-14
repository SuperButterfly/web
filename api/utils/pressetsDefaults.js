const colorGroup = [
  { 
    name: 'Primary',
    tokens: [
      { name: '100', color: '#003EB3' },
      { name: '300', color: '#0074F0' }, 
      { name: '500', color: '#14A9FF' }
    ]
  },
  {
    name: 'Gray',
    tokens: [
      { name: 'black', color: '#000000' },
      { name: '500', color: '#595959' }, 
      { name: '700', color: '#999999' },
      { name: '900', color: '#d9d9d9' }, 
      { name: 'white', color: '#FFFFFF' }
    ]
  }, {
    name: 'Success',
    tokens: [
      { name: '300', color: '#199033' }, 
      { name: '500', color: '#32A94C' }, 
      { name: '700', color: '#4CC366' }
    ]
  }, {
    name: 'Danger',
    tokens: [
      { name: '300', color: '#A22020' }, 
      { name: '500', color: '#BF2626' }, 
      { name: '700', color: '#E14747' }
    ]
  }
];

const fontGroup = [{
  name: 'Content',
  family: 'Inter',
  size: '12px',
  weight: '400'
}, {
  name: 'Heading',
  family: 'Inter',
  size: '32px',
  weight: '700'
}, {
  name: 'Paragraph',
  family: 'Arial',
  size: '14px',
  weight: '500'
}];

const layoutGroup = {
  size: [
    { name: 'XSmall', value: '16px' },
    { name: 'Medium', value: '96px' },
    { name: 'Large', value: '144px' },
    { name: 'XLarge', value: '192px' },
    { name: 'XXLarge', value: '288px' },
    { name: 'MaxWidth', value: '1400px' }
  ],
  space: [
    { name: 'HalfUnit', value: '8px' },
    { name: 'Unit', value: '16px' },
    { name: 'OneAndHalfUnits', value: '24px' },
    { name: 'TwoUnits', value: '32px' },
    { name: 'ThreeUnits', value: '48px' },
    { name: 'FourUnits', value: '64px' },
    { name: 'FiveUnits', value: '80px' },
    { name: 'SixUnits', value: '96px' }
  ],
  radius: [
    { name: 'Radius2', value: '2px' },
    { name: 'Radius4', value: '4px' },
    { name: 'Radius8', value: '8px' },
    { name: 'Round', value: '50%' }
  ]
};

module.exports = {
  colorGroup,
  fontGroup,
  layoutGroup
};
