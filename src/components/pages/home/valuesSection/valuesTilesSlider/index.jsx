import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ValuesTile from '@generic/ValueTiles';
import { ValuesTilesContainer, ValuesTilesWrapper } from './ValuesTilesSlider.styles';

SwiperCore.use([Pagination]);

export default function ValuesTilesSlider({ valuesTiles }) {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => `<span class=${className}></span>`,
  };

  return (
    <ValuesTilesContainer>
      <Swiper slidesPerView={1} spaceBetween={2} pagination={pagination} loop className="slider">
        {valuesTiles.map((valueTileData) => (
          <SwiperSlide className="slide" key={valueTileData.title}>
            <ValuesTilesWrapper>
              <ValuesTile data={valueTileData} />
            </ValuesTilesWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </ValuesTilesContainer>
  );
}

ValuesTilesSlider.propTypes = {
  valuesTiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
