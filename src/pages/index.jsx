import React from 'react';
import Mockup from '@components/Example/mockup';
import TopSection from '../components/home/topSection';
import ValuesSection from '../components/home/valuesSection';

export default function index() {
  return (
    <div>
      <TopSection />
      <ValuesSection />
      <Mockup />
    </div>
  );
}