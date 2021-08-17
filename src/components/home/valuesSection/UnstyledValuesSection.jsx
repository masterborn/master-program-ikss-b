import React from 'react';
import PropTypes from 'prop-types';
import { Header3 } from '../../typography/headers';
import { ParagraphBody } from '../../typography/paragraphs';
import Tile from './Tile';

const MOCKUP = {
  'homepage-values': {
    title: 'Wyróżniki, wartości, X-factory organizacji',
    text1:
      'Nie koniecznie musimy tu dawać tekst, ale jak jest potrzeba i przestrzeń można rozwinąć nagłówek.',
  },
  'homepage-tile-1': {
    title: 'Największa organizacja kulturalno-sportowa',
    text1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea tellus nullam vulputate sem suspendisse pellentesque ullamcorper.',
    image1:
      '//images.ctfassets.net/n21y2i4hkj4h/57PyNcsV9LnnX3os87lfaj/111394c0e83b6b167351a35dee87ab38/Group_163.svg',
  },
  'homepage-tile-2': {
    title: 'O różnorodności projektów, że każdy znajdzie coś dla siebie',
    text1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea tellus nullam vulputate sem suspendisse pellentesque ullamcorper.',
    image1:
      '//images.ctfassets.net/n21y2i4hkj4h/5WqeSc2NUSBWwLFJDfdTSJ/8608077c37107cd0a646561d8a46ce4e/Frame_170.svg',
  },
  'homepage-tile-3': {
    title: 'Coś o tym, że łączycie rozwój z zabawą i poznawaniem nowych ludzi',
    text1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea tellus nullam vulputate sem suspendisse pellentesque ullamcorper.',
    image1:
      '//images.ctfassets.net/n21y2i4hkj4h/6rSHMopKSWH8YCfhrRMg9c/78c1ff6cd36dfe747b17c3b6b55901ae/Frame_170__1_.svg',
  },
};

export default function UnstyledValuesSection({ className }) {
  const tiles = [MOCKUP['homepage-tile-1'], MOCKUP['homepage-tile-2'], MOCKUP['homepage-tile-3']];
  return (
    <section className={className}>
      <Header3>{MOCKUP['homepage-values'].title}</Header3>
      <ParagraphBody>{MOCKUP['homepage-values'].text1}</ParagraphBody>

      <div className="tiles-container">
        {tiles.map((val) => (
          <Tile data={val} key="tile" />
        ))}
      </div>
    </section>
  );
}

UnstyledValuesSection.propTypes = {
  className: PropTypes.string.isRequired,
};
