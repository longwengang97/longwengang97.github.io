// charts.js - Dashboard charts using CSS-only techniques
// No external chart library needed

function renderBarChart(containerId, data, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const maxVal = Math.max(...data.map(d => Math.max(d.inbound || 0, d.outbound || 0)));
  const barWidth = options.barWidth || 20;

  let html = '<div class="chart-legend" style="display:flex;gap:20px;margin-bottom:12px;justify-content:flex-end;">';
  html += '<span style="display:flex;align-items:center;gap:6px;font-size:13px;color:#64748B"><span style="width:12px;height:12px;background:#2F6BFF;border-radius:2px;display:inline-block"></span>入库</span>';
  html += '<span style="display:flex;align-items:center;gap:6px;font-size:13px;color:#64748B"><span style="width:12px;height:12px;background:#22C55E;border-radius:2px;display:inline-block"></span>出库</span>';
  html += '</div>';

  html += '<div class="bar-chart" style="display:flex;align-items:flex-end;justify-content:space-around;height:200px;padding:0 10px;border-bottom:1px solid #E2E8F0;">';

  data.forEach(d => {
    const inH = maxVal > 0 ? (d.inbound / maxVal) * 180 : 0;
    const outH = maxVal > 0 ? (d.outbound / maxVal) * 180 : 0;

    html += `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <div style="display:flex;align-items:flex-end;gap:3px;">
        <div style="width:${barWidth}px;height:${inH}px;background:#2F6BFF;border-radius:3px 3px 0 0;transition:height 0.5s;" title="入库: ${d.inbound}"></div>
        <div style="width:${barWidth}px;height:${outH}px;background:#22C55E;border-radius:3px 3px 0 0;transition:height 0.5s;" title="出库: ${d.outbound}"></div>
      </div>
      <span style="font-size:12px;color:#64748B;margin-top:8px;">${d.month}</span>
    </div>`;
  });

  html += '</div>';
  container.innerHTML = html;
}

function renderPieChart(containerId, percentage, label) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const color = percentage > 80 ? '#EF4444' : percentage > 60 ? '#F59E0B' : '#22C55E';

  container.innerHTML = `
    <div style="position:relative;width:160px;height:160px;margin:0 auto;">
      <div style="
        width:160px;height:160px;border-radius:50%;
        background:conic-gradient(${color} 0% ${percentage}%, #E2E8F0 ${percentage}% 100%);
        display:flex;align-items:center;justify-content:center;
      ">
        <div style="width:110px;height:110px;border-radius:50%;background:white;display:flex;flex-direction:column;align-items:center;justify-content:center;">
          <span style="font-size:28px;font-weight:700;color:#1E293B;">${percentage}%</span>
          <span style="font-size:12px;color:#64748B;">${label}</span>
        </div>
      </div>
    </div>
  `;
}

function renderMiniBar(value, max, color) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return `<div style="width:100%;height:8px;background:#E2E8F0;border-radius:4px;overflow:hidden;">
    <div style="width:${pct}%;height:100%;background:${color || '#2F6BFF'};border-radius:4px;transition:width 0.5s;"></div>
  </div>`;
}

function initDashboardCharts() {
  if (typeof MockData === 'undefined') return;

  const stats = MockData.dashboardStats;

  if (stats && stats.monthlyTrend) {
    renderBarChart('trendChart', stats.monthlyTrend);
  }

  if (stats) {
    renderPieChart('utilizationChart', stats.locationUtilization, '库位利用率');
  }
}
