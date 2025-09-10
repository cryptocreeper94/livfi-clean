// LivFi TokenomicsPage.jsx
import React from 'react';
import { LivFiMetrics, LivFiVisuals } from '../canon/LivFiModules';
import { formatCurrency, formatPercent } from '../utils/LivFiFormatters';

const TokenomicsPage = () => {
  const {
    totalSupply,
    circulatingSupply,
    devFundSplit,
    treasuryAllocation,
    walletCap,
    taxModel,
    volumeModel,
  } = LivFiMetrics;

  return (
    <div className="lif-tokenomics-page lif-canon lif-module">
      <h1 className="lif-title">📊 LivFi Tokenomics</h1>

      <section className="lif-section">
        <h2>Supply Overview</h2>
        <ul>
          <li>Total Supply: {formatCurrency(totalSupply)}</li>
          <li>Circulating Supply: {formatCurrency(circulatingSupply)}</li>
          <li>Wallet Cap: {formatPercent(walletCap)}</li>
        </ul>
      </section>

      <section className="lif-section">
        <h2>Allocation Breakdown</h2>
        <ul>
          <li>Dev Fund Split: {formatPercent(devFundSplit)}</li>
          <li>Treasury Allocation: {formatPercent(treasuryAllocation)}</li>
        </ul>
      </section>

      <section className="lif-section">
        <h2>Tax & Volume Modeling</h2>
        <ul>
          <li>Tax Model: {taxModel.description}</li>
          <li>Volume Model: {volumeModel.description}</li>
        </ul>
      </section>

      <section className="lif-section lif-visuals">
        <h2>Visual Modules</h2>
        <div className="lif-chart">{LivFiVisuals.tokenFlowChart}</div>
        <div className="lif-chart">{LivFiVisuals.volumeImpactGraph}</div>
      </section>
    </div>
  );
};

export default TokenomicsPage;
