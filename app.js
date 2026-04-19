/* ==========================================================================
   WMS Demo Prototype - Main Application
   All navigation, page rendering, and UI logic
   ========================================================================== */

// ---------------------------------------------------------------------------
// Page Map - Navigation Configuration
// ---------------------------------------------------------------------------
const PAGE_MAP = {
  'dashboard':        { title: '首页看板',                render: renderDashboard },
  'master-material':  { title: '基础数据 / 物料主数据',   render: renderMasterMaterial },
  'master-warehouse': { title: '基础数据 / 仓库库位管理', render: renderMasterWarehouse },
  'master-supplier':  { title: '基础数据 / 供应商管理',   render: renderMasterSupplier },
  'master-customer':  { title: '基础数据 / 客户管理',     render: renderMasterCustomer },
  'inbound-list':     { title: '入库管理 / 入库单管理',   render: renderInboundList },
  'inbound-receive':  { title: '入库管理 / 收货质检',    render: renderInboundReceive },
  'shelf-management': { title: '入库管理 / 上架任务',     render: renderShelfManagement },
  'shelf-strategy':   { title: '入库管理 / 上架策略配置', render: renderShelfStrategy },
  'outbound-list':    { title: '出库管理 / 出库单管理',   render: renderOutboundList },
  'outbound-pick':    { title: '出库管理 / 拣货复核',     render: renderOutboundPick },
  'inventory-query':  { title: '库存管理 / 库存查询',     render: renderInventoryQuery },
  'inventory-trace':  { title: '库存管理 / 批次追溯',     render: renderInventoryTrace },
  'counting':         { title: '盘点管理',                render: renderCounting },
  'warehouse-ops':    { title: '库内作业',                render: renderWarehouseOps },
  'barcode':          { title: '条码/标签管理',           render: renderBarcode },
  'safety-ledger':    { title: '安全合规 / 危化品台账',   render: renderSafetyLedger },
  'safety-log':       { title: '安全合规 / 操作日志',     render: renderSafetyLog },
  'reports':          { title: '报表中心',                render: renderReports },
  'system':           { title: '系统管理',                render: renderSystem }
};

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
function navigateTo(page) {
  // Update active menu item
  document.querySelectorAll('.menu-item').forEach(function (el) {
    el.classList.remove('active');
  });
  var target = document.querySelector('.menu-item[data-page="' + page + '"]');
  if (target) {
    target.classList.add('active');
    // Ensure parent submenu is open
    var submenu = target.closest('.submenu');
    if (submenu) submenu.classList.add('open');
  }
  // Update breadcrumb
  document.getElementById('breadcrumb').textContent = PAGE_MAP[page].title;
  // Render content
  document.getElementById('content').innerHTML = PAGE_MAP[page].render();
  // Scroll to top
  document.getElementById('content').scrollTop = 0;
}

function toggleMenuGroup(el) {
  var submenu = el.parentElement.querySelector('.submenu');
  if (submenu) {
    submenu.classList.toggle('open');
  }
}

// ---------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------
function showModal(title, bodyHtml) {
  document.getElementById('modalHeader').textContent = title;
  document.getElementById('modalBody').innerHTML = bodyHtml;
  document.getElementById('modalOverlay').classList.add('show');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show');
}

// ---------------------------------------------------------------------------
// Tab Switching
// ---------------------------------------------------------------------------
function switchTab(tabGroup, tabName) {
  // Toggle tab active state
  document.querySelectorAll('[data-tab-group="' + tabGroup + '"] .tab-item').forEach(function (t) {
    t.classList.remove('active');
  });
  var activeTab = document.querySelector('[data-tab-group="' + tabGroup + '"] [data-tab="' + tabName + '"]');
  if (activeTab) activeTab.classList.add('active');
  // Toggle content
  document.querySelectorAll('[data-tab-content-group="' + tabGroup + '"]').forEach(function (c) {
    c.style.display = 'none';
  });
  var activeContent = document.querySelector('[data-tab-content="' + tabName + '"]');
  if (activeContent) activeContent.style.display = 'block';
}

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------
function getStatusTag(status) {
  var map = {
    '待收货': 'default', '质检中': 'warning', '待上架': 'info', '已完成': 'success',
    '待拣货': 'default', '拣货中': 'warning', '待复核': 'info', '已发货': 'success',
    '正常': 'success', '冻结': 'danger', '待检': 'warning', '不良品': 'danger',
    '待盘点': 'default', '盘点中': 'warning', '已完成': 'success',
    '待执行': 'default', '执行中': 'warning', '启用': 'success', '停用': 'danger'
  };
  return '<span class="tag tag-' + (map[status] || 'default') + '">' + status + '</span>';
}

function getHazardTag(level) {
  var labels = { 1: '1级-剧毒', 2: '2级-易燃易爆', 3: '3级-腐蚀', 4: '4级-一般' };
  return '<span class="tag tag-level-' + level + '">' + (labels[level] || level) + '</span>';
}

function getLocationTypeTag(type) {
  var map = { '普通': 'default', '防爆': 'danger', '冷藏': 'info', '恒温': 'warning' };
  return '<span class="tag tag-' + (map[type] || 'default') + '">' + type + '</span>';
}

function generateBarcodeHtml(code) {
  // Generate a series of bars to simulate a barcode visual
  var bars = '';
  for (var i = 0; i < 30; i++) {
    var h = (i % 3 === 0) ? 48 : (i % 2 === 0) ? 42 : 36;
    var w = (i % 5 === 0) ? 3 : 2;
    bars += '<span style="height:' + h + 'px;width:' + w + 'px"></span>';
  }
  return '<div class="barcode-preview">' +
    '<div class="barcode-bars">' + bars + '</div>' +
    '<div class="barcode-text">' + code + '</div>' +
  '</div>';
}

// ---------------------------------------------------------------------------
// 1. Dashboard
// ---------------------------------------------------------------------------
function renderDashboard() {
  var stats = MockData.dashboardStats;

  // KPI Cards
  var html = '<div class="kpi-grid">';
  html += '<div class="kpi-card">' +
    '<div class="kpi-icon" style="background:#EBF5FF;color:#2F6BFF">&#128230;</div>' +
    '<div class="kpi-info">' +
      '<div class="kpi-number">' + stats.todayInbound + '</div>' +
      '<div class="kpi-label">今日入库单</div>' +
    '</div></div>';

  html += '<div class="kpi-card">' +
    '<div class="kpi-icon" style="background:#ECFDF5;color:#22C55E">&#128666;</div>' +
    '<div class="kpi-info">' +
      '<div class="kpi-number">' + stats.todayOutbound + '</div>' +
      '<div class="kpi-label">今日出库单</div>' +
    '</div></div>';

  html += '<div class="kpi-card">' +
    '<div class="kpi-icon" style="background:#EFF6FF;color:#3B82F6">&#128451;</div>' +
    '<div class="kpi-info">' +
      '<div class="kpi-number">' + stats.totalSKU.toLocaleString() + '</div>' +
      '<div class="kpi-label">库存SKU</div>' +
    '</div></div>';

  html += '<div class="kpi-card">' +
    '<div class="kpi-icon" style="background:#FEF2F2;color:#EF4444">&#9888;</div>' +
    '<div class="kpi-info">' +
      '<div class="kpi-number" style="color:#EF4444">' + stats.hazardAlerts + '</div>' +
      '<div class="kpi-label">危化品预警</div>' +
    '</div></div>';
  html += '</div>';

  // Two-column layout: trend chart + expiry warnings
  html += '<div class="grid-2 mb-16">';

  // Left: Bar chart - 库存出入库趋势
  html += '<div class="chart-container">';
  html += '<div class="chart-title">库存出入库趋势</div>';
  html += '<div class="bar-chart">';
  var maxVal = 0;
  stats.monthlyTrend.forEach(function (m) {
    if (m.inbound > maxVal) maxVal = m.inbound;
    if (m.outbound > maxVal) maxVal = m.outbound;
  });
  stats.monthlyTrend.forEach(function (m) {
    var inH = Math.round((m.inbound / maxVal) * 150);
    var outH = Math.round((m.outbound / maxVal) * 150);
    html += '<div class="bar-group">' +
      '<div style="display:flex;align-items:flex-end;gap:4px;height:100%">' +
        '<div>' +
          '<div class="bar-value">' + m.inbound + '</div>' +
          '<div class="bar" style="height:' + inH + 'px"></div>' +
        '</div>' +
        '<div>' +
          '<div class="bar-value">' + m.outbound + '</div>' +
          '<div class="bar green" style="height:' + outH + 'px"></div>' +
        '</div>' +
      '</div>' +
      '<div class="bar-label">' + m.month + '</div>' +
    '</div>';
  });
  html += '</div>';
  html += '<div class="chart-legend" style="margin-top:12px">' +
    '<div class="legend-item"><div class="legend-dot" style="background:var(--color-primary)"></div>入库</div>' +
    '<div class="legend-item"><div class="legend-dot" style="background:var(--color-success)"></div>出库</div>' +
  '</div>';
  html += '</div>';

  // Right: Expiry warnings
  html += '<div class="card">';
  html += '<div class="card-header">效期预警<span class="badge" style="margin-left:8px">' + stats.expiryAlerts.length + '</span></div>';
  html += '<div class="card-body" style="padding:0">';
  html += '<div class="table-wrapper"><table class="data-table"><thead><tr>' +
    '<th>物料名称</th><th>批次号</th><th>到期日期</th><th>剩余天数</th><th>状态</th>' +
  '</tr></thead><tbody>';
  stats.expiryAlerts.forEach(function (item) {
    var urgencyClass = item.daysLeft <= 7 ? 'text-danger font-bold' : (item.daysLeft <= 30 ? 'text-warning' : '');
    var urgencyTag = item.daysLeft <= 7
      ? '<span class="tag tag-danger">紧急</span>'
      : (item.daysLeft <= 30 ? '<span class="tag tag-warning">预警</span>' : '<span class="tag tag-info">关注</span>');
    html += '<tr>' +
      '<td>' + item.materialName + '</td>' +
      '<td>' + item.batchNo + '</td>' +
      '<td>' + item.expiryDate + '</td>' +
      '<td class="' + urgencyClass + '">' + item.daysLeft + '天</td>' +
      '<td>' + urgencyTag + '</td>' +
    '</tr>';
  });
  html += '</tbody></table></div></div></div>';
  html += '</div>'; // end grid-2

  // Bottom: 待办事项
  html += '<div class="card">';
  html += '<div class="card-header">待办事项<span class="badge" style="margin-left:8px">' + stats.pendingTasks.length + '</span></div>';
  html += '<div class="card-body" style="padding:0">';
  html += '<div class="table-wrapper"><table class="data-table"><thead><tr>' +
    '<th>任务内容</th><th>类型</th><th>优先级</th><th>截止时间</th><th>状态</th>' +
  '</tr></thead><tbody>';
  stats.pendingTasks.forEach(function (todo) {
    var priorityTag = todo.priority === '高'
      ? '<span class="tag tag-danger">高</span>'
      : (todo.priority === '中' ? '<span class="tag tag-warning">中</span>' : '<span class="tag tag-info">低</span>');
    html += '<tr>' +
      '<td>' + todo.description + '</td>' +
      '<td>' + todo.type + '</td>' +
      '<td>' + priorityTag + '</td>' +
      '<td>-</td>' +
      '<td><span class="tag tag-warning">待处理</span></td>' +
    '</tr>';
  });
  html += '</tbody></table></div></div></div>';

  return html;
}

// ---------------------------------------------------------------------------
// 2. Master Material
// ---------------------------------------------------------------------------
function renderMasterMaterial() {
  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">物料主数据</h2></div>' +
    '<div class="toolbar-right"><button class="btn btn-primary" onclick="showModal(\'新增物料\', renderMaterialForm())">+ 新增物料</button></div>' +
  '</div>';

  // Search bar
  html += '<div class="search-bar">' +
    '<div class="form-group"><label class="form-label">物料编码</label><input class="form-input" placeholder="请输入物料编码"></div>' +
    '<div class="form-group"><label class="form-label">物料名称</label><input class="form-input" placeholder="请输入物料名称"></div>' +
    '<div class="form-group"><label class="form-label">危化品等级</label>' +
      '<select class="form-select"><option value="">全部</option><option value="1">1级-剧毒</option><option value="2">2级-易燃易爆</option><option value="3">3级-腐蚀</option><option value="4">4级-一般</option></select>' +
    '</div>' +
    '<button class="btn btn-primary">查询</button>' +
    '<button class="btn btn-outline">重置</button>' +
  '</div>';

  // Data table
  html += '<div class="card"><div class="card-body" style="padding:0"><div class="table-wrapper">';
  html += '<table class="data-table"><thead><tr>' +
    '<th>物料编码</th><th>物料名称</th><th>规格</th><th>单位</th><th>CAS号</th><th>危化品等级</th><th>保质期</th><th>操作</th>' +
  '</tr></thead><tbody>';

  MockData.materials.forEach(function (m) {
    html += '<tr>' +
      '<td class="cell-link">' + m.code + '</td>' +
      '<td>' + m.name + '</td>' +
      '<td>' + m.spec + '</td>' +
      '<td>' + m.unit + '</td>' +
      '<td>' + m.cas + '</td>' +
      '<td>' + getHazardTag(m.hazardLevel) + '</td>' +
      '<td>' + m.shelfLife + '</td>' +
      '<td><button class="btn btn-text btn-sm" onclick="showMaterialDetail(\'' + m.code + '\')">查看</button></td>' +
    '</tr>';
  });

  html += '</tbody></table></div></div>';

  // Pagination
  html += '<div class="card-footer"><div class="pagination">' +
    '<div class="page-item disabled">&laquo;</div>' +
    '<div class="page-item active">1</div>' +
    '<div class="page-item">2</div>' +
    '<div class="page-item">3</div>' +
    '<div class="page-item">&raquo;</div>' +
  '</div><div class="page-info">共 ' + MockData.materials.length + ' 条记录</div></div>';
  html += '</div>';

  return html;
}

function showMaterialDetail(code) {
  var m = MockData.materials.find(function (item) { return item.code === code; });
  if (!m) return;
  var body = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">' +
    '<div class="form-group"><label class="form-label">物料编码</label><div>' + m.code + '</div></div>' +
    '<div class="form-group"><label class="form-label">物料名称</label><div>' + m.name + '</div></div>' +
    '<div class="form-group"><label class="form-label">规格</label><div>' + m.spec + '</div></div>' +
    '<div class="form-group"><label class="form-label">单位</label><div>' + m.unit + '</div></div>' +
    '<div class="form-group"><label class="form-label">CAS号</label><div>' + m.cas + '</div></div>' +
    '<div class="form-group"><label class="form-label">危化品等级</label><div>' + getHazardTag(m.hazardLevel) + '</div></div>' +
    '<div class="form-group"><label class="form-label">保质期</label><div>' + m.shelfLife + '</div></div>' +
    '<div class="form-group"><label class="form-label">存储条件</label><div>' + (m.storageCondition || '常温干燥') + '</div></div>' +
  '</div>';
  if (m.description) {
    body += '<div class="form-group" style="margin-top:8px"><label class="form-label">物料描述</label><div>' + m.description + '</div></div>';
  }
  showModal('物料详情 - ' + m.name, body);
}

function renderMaterialForm() {
  return '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">' +
    '<div class="form-group"><label class="form-label">物料编码 <span class="required">*</span></label><input class="form-input" placeholder="系统自动生成" disabled></div>' +
    '<div class="form-group"><label class="form-label">物料名称 <span class="required">*</span></label><input class="form-input" placeholder="请输入物料名称"></div>' +
    '<div class="form-group"><label class="form-label">规格</label><input class="form-input" placeholder="请输入规格"></div>' +
    '<div class="form-group"><label class="form-label">单位</label><select class="form-select"><option>kg</option><option>L</option><option>桶</option><option>瓶</option></select></div>' +
    '<div class="form-group"><label class="form-label">CAS号</label><input class="form-input" placeholder="请输入CAS号"></div>' +
    '<div class="form-group"><label class="form-label">危化品等级</label><select class="form-select"><option value="4">4级-一般</option><option value="3">3级-腐蚀</option><option value="2">2级-易燃易爆</option><option value="1">1级-剧毒</option></select></div>' +
    '<div class="form-group"><label class="form-label">保质期</label><input class="form-input" placeholder="如：12个月"></div>' +
    '<div class="form-group"><label class="form-label">存储条件</label><input class="form-input" placeholder="如：常温干燥"></div>' +
  '</div>';
}

// ---------------------------------------------------------------------------
// 3. Master Warehouse
// ---------------------------------------------------------------------------
function renderMasterWarehouse() {
  var warehouses = MockData.warehouses;

  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">仓库/库位管理</h2></div>' +
    '<div class="toolbar-right"><button class="btn btn-primary">+ 新增库位</button></div>' +
  '</div>';

  html += '<div style="display:grid;grid-template-columns:280px 1fr;gap:16px">';

  // Left: Tree view
  html += '<div class="card"><div class="card-header">仓库结构</div><div class="card-body">';
  html += '<div class="tree">';
  warehouses.forEach(function (wh) {
    html += '<div class="tree-item">';
    html += '<div class="tree-node" onclick="this.querySelector(\'.tree-toggle\').classList.toggle(\'expanded\');this.parentElement.querySelector(\'.tree-children\').classList.toggle(\'open\')">' +
      '<span class="tree-toggle">&#9654;</span>' +
      '<span class="tree-icon">&#127970;</span>' +
      '<span class="tree-label">' + wh.name + '</span>' +
    '</div>';
    html += '<div class="tree-children">';
    if (wh.zones) {
      wh.zones.forEach(function (zone) {
        html += '<div class="tree-item">';
        html += '<div class="tree-node" onclick="this.querySelector(\'.tree-toggle\').classList.toggle(\'expanded\');this.parentElement.querySelector(\'.tree-children\').classList.toggle(\'open\')">' +
          '<span class="tree-toggle">&#9654;</span>' +
          '<span class="tree-icon">&#128193;</span>' +
          '<span class="tree-label">' + zone.name + '</span>' +
        '</div>';
        html += '<div class="tree-children">';
        if (zone.locations) {
          zone.locations.forEach(function (loc) {
            html += '<div class="tree-item">';
            html += '<div class="tree-node">' +
              '<span class="tree-toggle leaf">&#9654;</span>' +
              '<span class="tree-icon">&#128206;</span>' +
              '<span class="tree-label">' + loc.code + '</span>' +
            '</div>';
            html += '</div>';
          });
        }
        html += '</div></div>';
      });
    }
    html += '</div></div>';
  });
  html += '</div></div></div>';

  // Right: Locations table
  html += '<div class="card"><div class="card-header">库位列表</div>';
  html += '<div class="card-body" style="padding:0"><div class="table-wrapper">';
  html += '<table class="data-table"><thead><tr>' +
    '<th>库位编码</th><th>所属仓库</th><th>所属库区</th><th>库位类型</th><th>状态</th><th>最大承重(kg)</th><th>最大容积(m³)</th>' +
  '</tr></thead><tbody>';

  warehouses.forEach(function (wh) {
    if (wh.zones) {
      wh.zones.forEach(function (zone) {
        if (zone.locations) {
          zone.locations.forEach(function (loc) {
            html += '<tr>' +
              '<td class="cell-link">' + loc.code + '</td>' +
              '<td>' + wh.name + '</td>' +
              '<td>' + zone.name + '</td>' +
              '<td>' + getLocationTypeTag(loc.type) + '</td>' +
              '<td>' + getStatusTag(loc.status) + '</td>' +
              '<td>' + loc.maxWeight + '</td>' +
              '<td>' + loc.maxVolume + '</td>' +
            '</tr>';
          });
        }
      });
    }
  });

  html += '</tbody></table></div></div></div>';
  html += '</div>';

  return html;
}

// ---------------------------------------------------------------------------
// 4. Master Supplier
// ---------------------------------------------------------------------------
function renderMasterSupplier() {
  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">供应商管理</h2></div>' +
    '<div class="toolbar-right"><button class="btn btn-primary">+ 新增供应商</button></div>' +
  '</div>';

  // Search bar
  html += '<div class="search-bar">' +
    '<div class="form-group"><label class="form-label">供应商编码</label><input class="form-input" placeholder="请输入编码"></div>' +
    '<div class="form-group"><label class="form-label">供应商名称</label><input class="form-input" placeholder="请输入名称"></div>' +
    '<div class="form-group"><label class="form-label">状态</label>' +
      '<select class="form-select"><option value="">全部</option><option>启用</option><option>停用</option></select>' +
    '</div>' +
    '<button class="btn btn-primary">查询</button>' +
    '<button class="btn btn-outline">重置</button>' +
  '</div>';

  html += '<div class="card"><div class="card-body" style="padding:0"><div class="table-wrapper">';
  html += '<table class="data-table"><thead><tr>' +
    '<th>供应商编码</th><th>供应商名称</th><th>联系人</th><th>联系电话</th><th>供应品类</th><th>资质等级</th><th>状态</th><th>操作</th>' +
  '</tr></thead><tbody>';

  MockData.suppliers.forEach(function (s) {
    html += '<tr>' +
      '<td class="cell-link">' + s.code + '</td>' +
      '<td>' + s.name + '</td>' +
      '<td>' + s.contact + '</td>' +
      '<td>' + s.phone + '</td>' +
      '<td>' + s.category + '</td>' +
      '<td>' + s.level + '</td>' +
      '<td>' + getStatusTag(s.status) + '</td>' +
      '<td><button class="btn btn-text btn-sm" onclick="showSupplierDetail(\'' + s.code + '\')">查看</button></td>' +
    '</tr>';
  });

  html += '</tbody></table></div></div>';
  html += '<div class="card-footer"><div class="pagination">' +
    '<div class="page-item disabled">&laquo;</div>' +
    '<div class="page-item active">1</div>' +
    '<div class="page-item">2</div>' +
    '<div class="page-item">&raquo;</div>' +
  '</div><div class="page-info">共 ' + MockData.suppliers.length + ' 条记录</div></div>';
  html += '</div>';

  return html;
}

function showSupplierDetail(code) {
  var s = MockData.suppliers.find(function (item) { return item.code === code; });
  if (!s) return;
  var body = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">' +
    '<div class="form-group"><label class="form-label">供应商编码</label><div>' + s.code + '</div></div>' +
    '<div class="form-group"><label class="form-label">供应商名称</label><div>' + s.name + '</div></div>' +
    '<div class="form-group"><label class="form-label">联系人</label><div>' + s.contact + '</div></div>' +
    '<div class="form-group"><label class="form-label">联系电话</label><div>' + s.phone + '</div></div>' +
    '<div class="form-group"><label class="form-label">供应品类</label><div>' + s.category + '</div></div>' +
    '<div class="form-group"><label class="form-label">资质等级</label><div>' + s.level + '</div></div>' +
    '<div class="form-group"><label class="form-label">地址</label><div>' + (s.address || '上海市浦东新区XX路XX号') + '</div></div>' +
    '<div class="form-group"><label class="form-label">状态</label><div>' + getStatusTag(s.status) + '</div></div>' +
  '</div>';
  showModal('供应商详情 - ' + s.name, body);
}

// ---------------------------------------------------------------------------
// 4-1. Master Customer (客户管理)
// ---------------------------------------------------------------------------
function renderMasterCustomer() {
  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">客户管理</h2></div>' +
    '<div class="toolbar-right"><button class="btn btn-primary">+ 新增客户</button></div>' +
  '</div>';

  // Search bar
  html += '<div class="search-bar">' +
    '<div class="form-group"><label class="form-label">客户编码</label><input class="form-input" placeholder="请输入编码"></div>' +
    '<div class="form-group"><label class="form-label">客户名称</label><input class="form-input" placeholder="请输入名称"></div>' +
    '<div class="form-group"><label class="form-label">行业</label>' +
      '<select class="form-select"><option value="">全部</option><option>涂料厂</option><option>胶黏剂厂</option><option>塑料加工厂</option></select>' +
    '</div>' +
    '<button class="btn btn-primary">查询</button>' +
    '<button class="btn btn-outline">重置</button>' +
  '</div>';

  html += '<div class="card"><div class="card-body" style="padding:0"><div class="table-wrapper">';
  html += '<table class="data-table"><thead><tr>' +
    '<th>客户编码</th><th>客户名称</th><th>联系人</th><th>联系电话</th><th>行业</th><th>地址</th><th>操作</th>' +
  '</tr></thead><tbody>';

  MockData.customers.forEach(function (c) {
    html += '<tr>' +
      '<td class="cell-link">' + c.code + '</td>' +
      '<td>' + c.name + '</td>' +
      '<td>' + c.contact + '</td>' +
      '<td>' + c.phone + '</td>' +
      '<td>' + c.industry + '</td>' +
      '<td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + c.address + '</td>' +
      '<td><button class="btn btn-text btn-sm" onclick="showCustomerDetail(\'' + c.code + '\')">查看</button></td>' +
    '</tr>';
  });

  html += '</tbody></table></div></div>';
  html += '<div class="card-footer"><div class="pagination">' +
    '<div class="page-item disabled">&laquo;</div>' +
    '<div class="page-item active">1</div>' +
    '<div class="page-item">2</div>' +
    '<div class="page-item">&raquo;</div>' +
  '</div><div class="page-info">共 ' + MockData.customers.length + ' 条记录</div></div>';
  html += '</div>';

  return html;
}

function showCustomerDetail(code) {
  var c = MockData.customers.find(function (item) { return item.code === code; });
  if (!c) return;
  var body = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">' +
    '<div class="form-group"><label class="form-label">客户编码</label><div>' + c.code + '</div></div>' +
    '<div class="form-group"><label class="form-label">客户名称</label><div>' + c.name + '</div></div>' +
    '<div class="form-group"><label class="form-label">联系人</label><div>' + c.contact + '</div></div>' +
    '<div class="form-group"><label class="form-label">联系电话</label><div>' + c.phone + '</div></div>' +
    '<div class="form-group"><label class="form-label">行业</label><div>' + c.industry + '</div></div>' +
    '<div class="form-group"><label class="form-label">地址</label><div>' + c.address + '</div></div>' +
  '</div>';
  showModal('客户详情 - ' + c.name, body);
}

// ---------------------------------------------------------------------------
// 5. Inbound List
// ---------------------------------------------------------------------------
function renderInboundList() {
  var orders = MockData.inboundOrders;

  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">入库单管理</h2></div>' +
    '<div class="toolbar-right"><button class="btn btn-primary">+ 新建入库单</button></div>' +
  '</div>';

  // Tabs
  html += '<div class="tabs" data-tab-group="inbound">' +
    '<div class="tab-item active" data-tab="all" onclick="switchTab(\'inbound\',\'all\')">全部<span class="badge" style="margin-left:6px">' + orders.length + '</span></div>' +
    '<div class="tab-item" data-tab="pending" onclick="switchTab(\'inbound\',\'pending\')">待收货</div>' +
    '<div class="tab-item" data-tab="inspecting" onclick="switchTab(\'inbound\',\'inspecting\')">质检中</div>' +
    '<div class="tab-item" data-tab="shelving" onclick="switchTab(\'inbound\',\'shelving\')">待上架</div>' +
    '<div class="tab-item" data-tab="done" onclick="switchTab(\'inbound\',\'done\')">已完成</div>' +
  '</div>';

  // Tab content: All
  var statusFilter = { 'all': null, 'pending': '待收货', 'inspecting': '质检中', 'shelving': '待上架', 'done': '已完成' };
  var tabs = ['all', 'pending', 'inspecting', 'shelving', 'done'];

  tabs.forEach(function (tab) {
    var filtered = tab === 'all' ? orders : orders.filter(function (o) { return o.status === statusFilter[tab]; });
    var display = tab === 'all' ? 'block' : 'none';

    html += '<div data-tab-content-group="inbound" data-tab-content="' + tab + '" style="display:' + display + '">';
    html += '<div class="card"><div class="card-body" style="padding:0"><div class="table-wrapper">';
    html += '<table class="data-table"><thead><tr>' +
      '<th>入库单号</th><th>入库类型</th><th>供应商</th><th>物料数</th><th>预计到货</th><th>状态</th><th>操作</th>' +
    '</tr></thead><tbody>';

    filtered.forEach(function (o) {
      html += '<tr>' +
        '<td class="cell-link">' + o.orderNo + '</td>' +
        '<td>' + o.type + '</td>' +
        '<td>' + o.supplier + '</td>' +
        '<td>' + o.materialCount + '</td>' +
        '<td>' + o.expectedDate + '</td>' +
        '<td>' + getStatusTag(o.status) + '</td>' +
        '<td><button class="btn btn-text btn-sm" onclick="showInboundDetail(\'' + o.orderNo + '\')">查看</button></td>' +
      '</tr>';
    });

    if (filtered.length === 0) {
      html += '<tr><td colspan="7" class="text-center text-muted" style="padding:40px">暂无数据</td></tr>';
    }

    html += '</tbody></table></div></div></div></div>';
  });

  return html;
}

function showInboundDetail(orderNo) {
  var o = MockData.inboundOrders.find(function (item) { return item.orderNo === orderNo; });
  if (!o) return;
  var body = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">' +
    '<div class="form-group"><label class="form-label">入库单号</label><div>' + o.orderNo + '</div></div>' +
    '<div class="form-group"><label class="form-label">入库类型</label><div>' + o.type + '</div></div>' +
    '<div class="form-group"><label class="form-label">供应商</label><div>' + o.supplier + '</div></div>' +
    '<div class="form-group"><label class="form-label">状态</label><div>' + getStatusTag(o.status) + '</div></div>' +
    '<div class="form-group"><label class="form-label">预计到货</label><div>' + o.expectedDate + '</div></div>' +
    '<div class="form-group"><label class="form-label">物料数</label><div>' + o.materialCount + '</div></div>' +
  '</div>';
  if (o.items) {
    body += '<h4 style="margin-bottom:8px">物料明细</h4>';
    body += '<table class="data-table"><thead><tr><th>物料名称</th><th>规格</th><th>数量</th><th>单位</th></tr></thead><tbody>';
    o.items.forEach(function (item) {
      body += '<tr><td>' + item.name + '</td><td>' + item.spec + '</td><td>' + item.qty + '</td><td>' + item.unit + '</td></tr>';
    });
    body += '</tbody></table>';
  }
  showModal('入库单详情 - ' + o.orderNo, body);
}

// ---------------------------------------------------------------------------
// 6. Inbound Receive
// ---------------------------------------------------------------------------
function renderInboundReceive() {
  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">收货/质检</h2></div>' +
  '</div>';

  // ASN预收货提示
  html += '<div class="alert alert-info mb-16">' +
    '<div class="alert-icon">&#128230;</div>' +
    '<div class="alert-content"><strong>ASN预收货模式：</strong>ERP采购订单已同步至WMS，请核实到货信息后进行扫码收货。质检合格后自动推送至上架模块。</div>' +
  '</div>';

  // Steps bar - 收货 -> 质检 -> 完成 (上架独立模块)
  html += '<div class="steps mb-16">';
  var steps = ['ASN预收货', '扫码收货', '质检判定', '完成'];
  steps.forEach(function (s, i) {
    var cls = i === 1 ? 'active' : (i < 1 ? 'completed' : '');
    var dot = i < 1 ? '&#10003;' : (i + 1);
    html += '<div class="step-item ' + cls + '">' +
      '<div class="step-dot">' + dot + '</div>' +
      '<div class="step-label">' + s + '</div>' +
    '</div>';
  });
  html += '</div>';

  // ASN信息
  html += '<div class="card mb-16">';
  html += '<div class="card-header">ASN到货预通知</div>';
  html += '<div class="card-body">';
  html += '<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:16px">' +
    '<div class="form-group"><label class="form-label">采购订单号</label><div class="font-semibold">PO20260416-0089</div></div>' +
    '<div class="form-group"><label class="form-label">供应商</label><div>江苏扬子巴斯夫有限公司</div></div>' +
    '<div class="form-group"><label class="form-label">预计到货时间</label><div>2026-04-16 14:30</div></div>' +
    '<div class="form-group"><label class="form-label">ASN状态</label><div><span class="tag tag-warning">待收货</span></div></div>' +
  '</div>';
  html += '</div></div>';

  // Receiving card
  html += '<div class="card mb-16">';
  html += '<div class="card-header">扫码收货</div>';
  html += '<div class="card-body">';

  // Alert
  html += '<div class="alert alert-warning mb-16">' +
    '<div class="alert-icon">&#9888;</div>' +
    '<div class="alert-content">请扫描物料条码进行收货，数量不一致时系统会自动提示。危化品需注意存储条件匹配。</div>' +
  '</div>';

  // Scan area
  html += '<div style="display:flex;gap:12px;align-items:flex-end;margin-bottom:20px">' +
    '<div class="form-group" style="flex:1;margin-bottom:0"><label class="form-label">扫描采购订单码/物料条码</label><input class="form-input" placeholder="扫描或输入条码"></div>' +
    '<button class="btn btn-primary" style="height:36px">扫码确认</button>' +
  '</div>';

  // Material detail table
  html += '<h4 style="margin-bottom:12px">收货明细</h4>';
  html += '<div class="table-wrapper"><table class="data-table"><thead><tr>' +
    '<th>物料编码</th><th>物料名称</th><th>危化品等级</th><th>订单数量</th><th>实收数量</th><th>批次号</th><th>状态</th>' +
  '</tr></thead><tbody>';

  var receiveItems = [
    { code: 'MAT-002', name: '丙酮', hazardLevel: 2, orderQty: 1000, receivedQty: 1000, batchNo: 'BT20260416001', status: '已收货' },
    { code: 'MAT-003', name: '乙酸乙酯', hazardLevel: 2, orderQty: 800, receivedQty: 800, batchNo: 'BT20260416002', status: '已收货' },
    { code: 'MAT-001', name: '甲苯', hazardLevel: 2, orderQty: 2000, receivedQty: 0, batchNo: '', status: '待收货' }
  ];

  receiveItems.forEach(function (item) {
    var hazardTag = item.hazardLevel ? getHazardTag(item.hazardLevel) : '';
    var rowClass = item.status === '待收货' ? 'row-warning' : '';
    html += '<tr class="' + rowClass + '">' +
      '<td>' + item.code + '</td>' +
      '<td>' + item.name + ' ' + hazardTag + '</td>' +
      '<td>' + (item.receivedQty > 0 ? item.receivedQty : '<input class="form-input" style="width:80px" placeholder="输入数量">') + '</td>' +
      '<td><input class="form-input" style="width:80px" value="' + item.receivedQty + '"></td>' +
      '<td><input class="form-input" style="width:140px" value="' + item.batchNo + '" placeholder="自动生成"></td>' +
      '<td>' + getStatusTag(item.status) + '</td>' +
    '</tr>';
  });

  html += '</tbody></table></div>';
  html += '</div>';
  html += '<div class="card-footer">' +
    '<button class="btn btn-outline">暂存</button>' +
    '<button class="btn btn-primary">确认收货并生成待检任务</button>' +
  '</div>';
  html += '</div>';

  // Quality inspection card
  html += '<div class="card">';
  html += '<div class="card-header">质检信息 <span class="text-secondary text-sm" style="font-weight:normal;margin-left:8px">（质检合格后自动推送至上架模块）</span></div>';
  html += '<div class="card-body">';
  html += '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px">' +
    '<div class="form-group"><label class="form-label">质检员</label><input class="form-input" value="赵刚"></div>' +
    '<div class="form-group"><label class="form-label">质检日期</label><input class="form-input" type="date" value="2026-04-16"></div>' +
    '<div class="form-group"><label class="form-label">质检结果</label><select class="form-select"><option>合格</option><option>不合格</option><option>待复检</option></select></div>' +
  '</div>';
  html += '<div class="form-group"><label class="form-label">质检备注</label><textarea class="form-textarea" placeholder="请输入质检备注信息，如：纯度99.6%，符合标准"></textarea></div>';
  html += '</div></div>';

  return html;
}

// ---------------------------------------------------------------------------
// 6-1. Shelf Management (上架管理模块 - 策略引擎)
// ---------------------------------------------------------------------------
function renderShelfManagement() {
  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">上架管理</h2></div>' +
    '<div class="toolbar-right"><button class="btn btn-primary">刷新任务</button></div>' +
  '</div>';

  // 上架策略说明
  html += '<div class="alert alert-info mb-16">' +
    '<div class="alert-icon">&#128200;</div>' +
    '<div class="alert-content"><strong>智能上架策略：</strong>系统基于危化品合规校验（等级匹配、化学相容性、温湿度）强制规则 + 多维度加权评分（同品聚集、就近原则、出库便利性、空间利用率、重量分层、效期集中）自动推荐最优库位</div>' +
  '</div>';

  // 任务工作台
  html += '<div class="card mb-16">';
  html += '<div class="card-header">上架任务工作台</div>';
  html += '<div class="card-body" style="padding:0"><div class="table-wrapper">';
  html += '<table class="data-table"><thead><tr>' +
    '<th>任务编号</th><th>入库单号</th><th>物料名称</th><th>危化品等级</th><th>待上架数量</th><th>来源</th><th>优先级</th><th>状态</th><th>操作</th>' +
  '</tr></thead><tbody>';

  var shelfTasks = [
    { taskNo: 'SH202604160001', orderNo: 'RK202604160001', material: '丙酮', hazardLevel: 2, qty: 1000, source: '采购入库', priority: '高', status: '待执行' },
    { taskNo: 'SH202604160002', orderNo: 'RK202604160001', material: '乙酸乙酯', hazardLevel: 2, qty: 800, source: '采购入库', priority: '高', status: '待执行' },
    { taskNo: 'SH202604150003', orderNo: 'RK202604150002', material: '聚氨酯固化剂', hazardLevel: 4, qty: 300, source: '采购入库', priority: '中', status: '已完成' },
    { taskNo: 'SH202604150004', orderNo: 'RK202604150003', material: '环氧树脂', hazardLevel: 4, qty: 600, source: '采购入库', priority: '中', status: '已完成' }
  ];

  shelfTasks.forEach(function (task) {
    var priorityTag = task.priority === '高'
      ? '<span class="tag tag-danger">紧急</span>'
      : (task.priority === '中' ? '<span class="tag tag-warning">普通</span>' : '<span class="tag tag-info">低</span>');
    html += '<tr>' +
      '<td class="cell-link">' + task.taskNo + '</td>' +
      '<td>' + task.orderNo + '</td>' +
      '<td>' + task.material + ' ' + getHazardTag(task.hazardLevel) + '</td>' +
      '<td>' + getHazardTag(task.hazardLevel) + '</td>' +
      '<td>' + task.qty + ' kg</td>' +
      '<td>' + task.source + '</td>' +
      '<td>' + priorityTag + '</td>' +
      '<td>' + getStatusTag(task.status) + '</td>' +
      '<td><button class="btn btn-primary btn-sm" onclick="showShelfTaskDetail(\'' + task.taskNo + '\')">执行上架</button></td>' +
    '</tr>';
  });

  html += '</tbody></table></div></div></div>';

  return html;
}

function showShelfTaskDetail(taskNo) {
  var task = { taskNo: taskNo, orderNo: 'RK202604160001', material: '丙酮', hazardLevel: 2, qty: 1000, source: '采购入库' };
  var body = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">' +
    '<div class="form-group"><label class="form-label">任务编号</label><div>' + task.taskNo + '</div></div>' +
    '<div class="form-group"><label class="form-label">入库单号</label><div>' + task.orderNo + '</div></div>' +
    '<div class="form-group"><label class="form-label">物料名称</label><div>' + task.material + ' ' + getHazardTag(task.hazardLevel) + '</div></div>' +
    '<div class="form-group"><label class="form-label">待上架数量</label><div>' + task.qty + ' kg</div></div>' +
    '<div class="form-group"><label class="form-label">来源</label><div>' + task.source + '</div></div>' +
    '<div class="form-group"><label class="form-label">存储要求</label><div>0~25℃ 防爆区存储</div></div>' +
  '</div>';

  body += '<h4 style="margin-bottom:8px">推荐库位（系统智能推荐）</h4>';
  body += '<table class="data-table"><thead><tr><th>排名</th><th>库位</th><th>库区</th><th>评分</th><th>推荐理由</th></tr></thead><tbody>';
  body += '<tr><td>1</td><td><span class="tag tag-success">A-01-03</span></td><td>A区-防爆区</td><td>92分</td><td>已有同物料，优先推荐</td></tr>';
  body += '<tr><td>2</td><td><span class="tag tag-info">A-02-02</span></td><td>A区-防爆区</td><td>78分</td><td>空库位，距离近</td></tr>';
  body += '<tr><td>3</td><td><span class="tag tag-info">G-01-03</span></td><td>G区-易燃品区</td><td>65分</td><td>空库位，危化品专区</td></tr>';
  body += '</tbody></table>';

  body += '<div style="margin-top:16px;display:flex;gap:12px;align-items:center">' +
    '<label class="form-label" style="margin:0">选择库位：</label>' +
    '<select class="form-select" style="width:200px"><option>A-01-03 (推荐)</option><option>A-02-02</option><option>G-01-03</option></select>' +
  '</div>';

  showModal('上架任务 - ' + taskNo, body);
}

// ---------------------------------------------------------------------------
// 6-2. Shelf Strategy Config (上架策略配置)
// ---------------------------------------------------------------------------
function renderShelfStrategy() {
  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">上架策略配置</h2></div>' +
    '<div class="toolbar-right">' +
      '<button class="btn btn-outline" onclick="resetShelfStrategy()">恢复默认</button>' +
      '<button class="btn btn-primary" onclick="saveShelfStrategy()">保存配置</button>' +
    '</div>' +
  '</div>';

  // 策略配置说明
  html += '<div class="alert alert-info mb-16">' +
    '<div class="alert-icon">&#128200;</div>' +
    '<div class="alert-content">配置上架策略的优化规则权重和各参数设置。权重总和必须等于100%。</div>' +
  '</div>';

  // 优化规则权重配置
  html += '<div class="card mb-16">';
  html += '<div class="card-header">优化规则权重配置</div>';
  html += '<div class="card-body">';
  html += '<div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:16px">';

  var weights = [
    { key: 'cluster', name: '同品聚集', default: 30, desc: '同物料优先分配至已有同类物料的库位' },
    { key: 'nearby', name: '就近原则', default: 20, desc: '距离暂存区/收货区越近分越高' },
    { key: 'outbound', name: '出库便利性', default: 20, desc: '高频出库物料优先分配靠近出库口的库位' },
    { key: 'space', name: '空间利用率', default: 15, desc: '优先填充已部分占用的库位，减少碎片' },
    { key: 'weight', name: '重量分层', default: 10, desc: '重货优先下层库位，轻货优先上层库位' },
    { key: 'expiry', name: '效期集中', default: 5, desc: '同批次、同效期物料优先集中存放' }
  ];

  weights.forEach(function (w, idx) {
    html += '<div class="form-group">' +
      '<label class="form-label">' + w.name + ' (%)</label>' +
      '<input type="number" class="form-input strategy-weight" data-key="' + w.key + '" value="' + w.default + '" min="0" max="100" onchange="calcWeightTotal()">' +
      '<div class="form-hint">' + w.desc + '</div>' +
    '</div>';
  });

  html += '</div>';
  html += '<div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border-color);display:flex;align-items:center;gap:12px">';
  html += '<span class="font-semibold">权重总和：</span>';
  html += '<span id="weightTotal" class="font-bold" style="font-size:18px;color:var(--color-success)">100%</span>';
  html += '<span id="weightWarning" class="tag tag-danger" style="display:none">权重总和必须等于100%</span>';
  html += '</div>';
  html += '</div></div>';

  // 其他参数配置
  html += '<div class="grid-2 mb-16">';

  // 左：推荐参数
  html += '<div class="card">';
  html += '<div class="card-header">推荐参数配置</div>';
  html += '<div class="card-body">';
  html += '<div class="form-group"><label class="form-label">推荐库位数量</label><input type="number" class="form-input" value="5" min="3" max="10"><div class="form-hint">推荐候选库位的数量，默认5个</div></div>';
  html += '<div class="form-group"><label class="form-label">高频物料阈值（次/月）</label><input type="number" class="form-input" value="10" min="5" max="50"><div class="form-hint">近30天出库频次超过该值判定为高频物料</div></div>';
  html += '<div class="form-group"><label class="form-label">安全间距（库位）</label><input type="number" class="form-input" value="2" min="1" max="5"><div class="form-hint">化学相容性为△时的最小库位间隔</div></div>';
  html += '</div></div>';

  // 右：存储参数
  html += '<div class="card">';
  html += '<div class="card-header">存储参数配置</div>';
  html += '<div class="card-body">';
  html += '<div class="form-group"><label class="form-label">重量分层阈值（kg）</label><input type="number" class="form-input" value="500" min="100" max="2000"><div class="form-hint">超过该重量判定为重货，优先下层</div></div>';
  html += '<div class="form-group"><label class="form-label">空间利用率上限（%）</label><input type="number" class="form-input" value="90" min="70" max="95"><div class="form-hint">库位占用率超过该值后不再推荐</div></div>';
  html += '<div class="form-group"><label class="form-label">是否允许混放</label><select class="form-select"><option value="false">否（同物料不同批次允许）</option><option value="true">是</option></select><div class="form-hint">同一库位是否允许存放不同物料</div></div>';
  html += '</div></div>';

  html += '</div>';

  // 强制规则说明
  html += '<div class="card">';
  html += '<div class="card-header">强制规则说明（一票否决，不可配置）</div>';
  html += '<div class="card-body">';
  html += '<div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:16px">';
  html += '<div class="form-group"><label class="form-label">R-01 危化品等级匹配</label><div class="text-secondary">物料等级≤库位安全等级</div></div>';
  html += '<div class="form-group"><label class="form-label">R-02 化学相容性</label><div class="text-secondary">氧化剂与还原剂禁止同库区</div></div>';
  html += '<div class="form-group"><label class="form-label">R-03 温湿度条件</label><div class="text-secondary">存储温度范围必须满足</div></div>';
  html += '<div class="form-group"><label class="form-label">R-04 液固分区</label><div class="text-secondary">液体与固体分区存放</div></div>';
  html += '<div class="form-group"><label class="form-label">R-05 承重容积校验</label><div class="text-secondary">上架数量不能超过库位限制</div></div>';
  html += '<div class="form-group"><label class="form-label">R-06 库位状态</label><div class="text-secondary">必须为空闲或占用但未满</div></div>';
  html += '</div>';
  html += '</div></div>';

  return html;
}

function calcWeightTotal() {
  var total = 0;
  document.querySelectorAll('.strategy-weight').forEach(function (input) {
    total += parseInt(input.value) || 0;
  });
  var totalEl = document.getElementById('weightTotal');
  var warningEl = document.getElementById('weightWarning');
  totalEl.textContent = total + '%';
  if (total === 100) {
    totalEl.style.color = 'var(--color-success)';
    warningEl.style.display = 'none';
  } else {
    totalEl.style.color = 'var(--color-danger)';
    warningEl.style.display = 'inline';
  }
}

function saveShelfStrategy() {
  var total = 0;
  document.querySelectorAll('.strategy-weight').forEach(function (input) {
    total += parseInt(input.value) || 0;
  });
  if (total !== 100) {
    alert('权重总和必须等于100%！');
    return;
  }
  alert('上架策略配置已保存！');
}

function resetShelfStrategy() {
  document.querySelectorAll('.strategy-weight').forEach(function (input) {
    var defaults = { cluster: 30, nearby: 20, outbound: 20, space: 15, weight: 10, expiry: 5 };
    input.value = defaults[input.dataset.key] || 30;
  });
  calcWeightTotal();
  alert('已恢复为默认配置');
}

// ---------------------------------------------------------------------------
// 7. Outbound List
// ---------------------------------------------------------------------------
function renderOutboundList() {
  var orders = MockData.outboundOrders;

  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">出库单管理</h2></div>' +
    '<div class="toolbar-right"><button class="btn btn-primary">+ 新建出库单</button></div>' +
  '</div>';

  // Tabs
  html += '<div class="tabs" data-tab-group="outbound">' +
    '<div class="tab-item active" data-tab="ob-all" onclick="switchTab(\'outbound\',\'ob-all\')">全部<span class="badge" style="margin-left:6px">' + orders.length + '</span></div>' +
    '<div class="tab-item" data-tab="ob-pick" onclick="switchTab(\'outbound\',\'ob-pick\')">待拣货</div>' +
    '<div class="tab-item" data-tab="ob-picking" onclick="switchTab(\'outbound\',\'ob-picking\')">拣货中</div>' +
    '<div class="tab-item" data-tab="ob-review" onclick="switchTab(\'outbound\',\'ob-review\')">待复核</div>' +
    '<div class="tab-item" data-tab="ob-shipped" onclick="switchTab(\'outbound\',\'ob-shipped\')">已发货</div>' +
  '</div>';

  var statusFilter = { 'ob-all': null, 'ob-pick': '待拣货', 'ob-picking': '拣货中', 'ob-review': '待复核', 'ob-shipped': '已发货' };
  var tabs = ['ob-all', 'ob-pick', 'ob-picking', 'ob-review', 'ob-shipped'];

  tabs.forEach(function (tab) {
    var filtered = tab === 'ob-all' ? orders : orders.filter(function (o) { return o.status === statusFilter[tab]; });
    var display = tab === 'ob-all' ? 'block' : 'none';

    html += '<div data-tab-content-group="outbound" data-tab-content="' + tab + '" style="display:' + display + '">';
    html += '<div class="card"><div class="card-body" style="padding:0"><div class="table-wrapper">';
    html += '<table class="data-table"><thead><tr>' +
      '<th>出库单号</th><th>出库类型</th><th>客户/领料部门</th><th>物料数</th><th>计划出库</th><th>状态</th><th>操作</th>' +
    '</tr></thead><tbody>';

    filtered.forEach(function (o) {
      html += '<tr>' +
        '<td class="cell-link">' + o.orderNo + '</td>' +
        '<td>' + o.type + '</td>' +
        '<td>' + o.customer + '</td>' +
        '<td>' + o.materialCount + '</td>' +
        '<td>' + o.plannedDate + '</td>' +
        '<td>' + getStatusTag(o.status) + '</td>' +
        '<td><button class="btn btn-text btn-sm" onclick="showOutboundDetail(\'' + o.orderNo + '\')">查看</button></td>' +
      '</tr>';
    });

    if (filtered.length === 0) {
      html += '<tr><td colspan="7" class="text-center text-muted" style="padding:40px">暂无数据</td></tr>';
    }

    html += '</tbody></table></div></div></div></div>';
  });

  return html;
}

function showOutboundDetail(orderNo) {
  var o = MockData.outboundOrders.find(function (item) { return item.orderNo === orderNo; });
  if (!o) return;
  var body = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">' +
    '<div class="form-group"><label class="form-label">出库单号</label><div>' + o.orderNo + '</div></div>' +
    '<div class="form-group"><label class="form-label">出库类型</label><div>' + o.type + '</div></div>' +
    '<div class="form-group"><label class="form-label">客户/部门</label><div>' + o.customer + '</div></div>' +
    '<div class="form-group"><label class="form-label">状态</label><div>' + getStatusTag(o.status) + '</div></div>' +
    '<div class="form-group"><label class="form-label">计划出库日</label><div>' + o.plannedDate + '</div></div>' +
    '<div class="form-group"><label class="form-label">物料数</label><div>' + o.materialCount + '</div></div>' +
  '</div>';
  if (o.items) {
    body += '<h4 style="margin-bottom:8px">物料明细</h4>';
    body += '<table class="data-table"><thead><tr><th>物料名称</th><th>规格</th><th>数量</th><th>单位</th><th>库位</th></tr></thead><tbody>';
    o.items.forEach(function (item) {
      body += '<tr><td>' + item.name + '</td><td>' + item.spec + '</td><td>' + item.qty + '</td><td>' + item.unit + '</td><td>' + (item.location || '-') + '</td></tr>';
    });
    body += '</tbody></table>';
  }
  showModal('出库单详情 - ' + o.orderNo, body);
}

// ---------------------------------------------------------------------------
// 8. Outbound Pick
// ---------------------------------------------------------------------------
function renderOutboundPick() {
  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">拣货复核</h2></div>' +
  '</div>';

  // Pick tasks card
  html += '<div class="card mb-16">';
  html += '<div class="card-header">拣货任务<div class="card-actions"><span class="tag tag-warning">进行中</span></div></div>';
  html += '<div class="card-body" style="padding:0"><div class="table-wrapper">';
  html += '<table class="data-table"><thead><tr>' +
    '<th>任务编号</th><th>出库单号</th><th>物料名称</th><th>批次号</th><th>库位</th><th>需拣数量</th><th>已拣数量</th><th>状态</th>' +
  '</tr></thead><tbody>';

  var pickTasks = MockData.pickTasks || [
    { taskNo: 'PT20260414001', orderNo: 'CK2026041001', material: '甲苯', batchNo: 'BN20260401-01', location: 'A-01-02', needQty: 100, pickedQty: 100, status: '已完成' },
    { taskNo: 'PT20260414002', orderNo: 'CK2026041001', material: '乙醇', batchNo: 'BN20260403-02', location: 'B-02-01', needQty: 50, pickedQty: 30, status: '拣货中' },
    { taskNo: 'PT20260414003', orderNo: 'CK2026041002', material: '丙酮', batchNo: 'BN20260405-01', location: 'A-03-01', needQty: 200, pickedQty: 0, status: '待拣货' },
    { taskNo: 'PT20260414004', orderNo: 'CK2026041002', material: '氢氧化钠', batchNo: 'BN20260406-03', location: 'C-01-02', needQty: 80, pickedQty: 0, status: '待拣货' }
  ];

  pickTasks.forEach(function (t) {
    html += '<tr>' +
      '<td>' + t.taskNo + '</td>' +
      '<td class="cell-link">' + t.orderNo + '</td>' +
      '<td>' + t.material + '</td>' +
      '<td>' + t.batchNo + '</td>' +
      '<td><span class="tag tag-info">' + t.location + '</span></td>' +
      '<td>' + t.needQty + '</td>' +
      '<td>' + t.pickedQty + '</td>' +
      '<td>' + getStatusTag(t.status) + '</td>' +
    '</tr>';
  });

  html += '</tbody></table></div></div></div>';

  // Review area
  html += '<div class="card">';
  html += '<div class="card-header">复核区域</div>';
  html += '<div class="card-body">';

  html += '<div class="alert alert-info mb-16">' +
    '<div class="alert-icon">&#128712;</div>' +
    '<div class="alert-content">请逐一扫描已拣货物料的条码进行复核确认</div>' +
  '</div>';

  html += '<div style="display:flex;gap:12px;align-items:flex-end;margin-bottom:20px">' +
    '<div class="form-group" style="flex:1;margin-bottom:0"><label class="form-label">扫描物料条码</label><input class="form-input" placeholder="扫描或输入物料条码"></div>' +
    '<button class="btn btn-primary" style="height:36px">扫描确认</button>' +
  '</div>';

  html += '<h4 style="margin-bottom:12px">已复核物料</h4>';
  html += '<div class="table-wrapper"><table class="data-table"><thead><tr>' +
    '<th>物料名称</th><th>批次号</th><th>拣货数量</th><th>复核数量</th><th>复核结果</th><th>复核时间</th>' +
  '</tr></thead><tbody>';
  html += '<tr><td>甲苯</td><td>BN20260401-01</td><td>100</td><td>100</td><td><span class="tag tag-success">一致</span></td><td>2026-04-14 10:25</td></tr>';
  html += '</tbody></table></div>';

  html += '</div>';
  html += '<div class="card-footer">' +
    '<button class="btn btn-outline">返回</button>' +
    '<button class="btn btn-success">完成复核</button>' +
  '</div>';
  html += '</div>';

  return html;
}

// ---------------------------------------------------------------------------
// 9. Inventory Query
// ---------------------------------------------------------------------------
function renderInventoryQuery() {
  var inventory = MockData.inventory;

  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">库存查询</h2></div>' +
    '<div class="toolbar-right"><button class="btn btn-outline">导出Excel</button></div>' +
  '</div>';

  // Search bar
  html += '<div class="search-bar">' +
    '<div class="form-group"><label class="form-label">物料编码</label><input class="form-input" placeholder="请输入物料编码"></div>' +
    '<div class="form-group"><label class="form-label">批次号</label><input class="form-input" placeholder="请输入批次号"></div>' +
    '<div class="form-group"><label class="form-label">库位</label><input class="form-input" placeholder="请输入库位"></div>' +
    '<div class="form-group"><label class="form-label">状态</label>' +
      '<select class="form-select"><option value="">全部</option><option>正常</option><option>冻结</option><option>待检</option><option>不良品</option></select>' +
    '</div>' +
    '<button class="btn btn-primary">查询</button>' +
    '<button class="btn btn-outline">重置</button>' +
  '</div>';

  // Summary stats
  var totalQty = 0;
  var frozenCount = 0;
  var warningCount = 0;
  inventory.forEach(function (inv) {
    totalQty += inv.qty;
    if (inv.status === '冻结') frozenCount++;
    if (inv.daysToExpiry !== undefined && inv.daysToExpiry <= 30) warningCount++;
  });

  html += '<div class="stat-row">' +
    '<div class="stat-box"><div class="stat-icon" style="background:#EBF1FF;color:#2F6BFF">&#128230;</div><div><div class="stat-value">' + inventory.length + '</div><div class="stat-label">库存批次数</div></div></div>' +
    '<div class="stat-box"><div class="stat-icon" style="background:#ECFDF5;color:#22C55E">&#128200;</div><div><div class="stat-value">' + totalQty.toLocaleString() + '</div><div class="stat-label">库存总量</div></div></div>' +
    '<div class="stat-box"><div class="stat-icon" style="background:#FEF2F2;color:#EF4444">&#128274;</div><div><div class="stat-value">' + frozenCount + '</div><div class="stat-label">冻结批次</div></div></div>' +
    '<div class="stat-box"><div class="stat-icon" style="background:#FFFBEB;color:#F59E0B">&#9888;</div><div><div class="stat-value">' + warningCount + '</div><div class="stat-label">效期预警</div></div></div>' +
  '</div>';

  // Table
  html += '<div class="card"><div class="card-body" style="padding:0"><div class="table-wrapper">';
  html += '<table class="data-table"><thead><tr>' +
    '<th>物料编码</th><th>物料名称</th><th>批次号</th><th>库位</th><th>数量</th><th>单位</th><th>状态</th><th>入库日期</th><th>保质期截止</th>' +
  '</tr></thead><tbody>';

  inventory.forEach(function (inv) {
    var rowClass = '';
    if (inv.daysToExpiry !== undefined) {
      if (inv.daysToExpiry <= 0) rowClass = 'row-danger';
      else if (inv.daysToExpiry <= 30) rowClass = 'row-warning';
    }
    html += '<tr class="' + rowClass + '">' +
      '<td class="cell-link">' + inv.materialCode + '</td>' +
      '<td>' + inv.materialName + '</td>' +
      '<td>' + inv.batchNo + '</td>' +
      '<td><span class="tag tag-info">' + inv.location + '</span></td>' +
      '<td>' + inv.qty + '</td>' +
      '<td>' + inv.unit + '</td>' +
      '<td>' + getStatusTag(inv.status) + '</td>' +
      '<td>' + inv.inboundDate + '</td>' +
      '<td>' + inv.expiryDate + '</td>' +
    '</tr>';
  });

  html += '</tbody></table></div></div>';
  html += '<div class="card-footer"><div class="pagination">' +
    '<div class="page-item disabled">&laquo;</div>' +
    '<div class="page-item active">1</div>' +
    '<div class="page-item">2</div>' +
    '<div class="page-item">3</div>' +
    '<div class="page-item">&raquo;</div>' +
  '</div><div class="page-info">共 ' + inventory.length + ' 条记录</div></div>';
  html += '</div>';

  return html;
}

// ---------------------------------------------------------------------------
// 10. Inventory Trace
// ---------------------------------------------------------------------------
function renderInventoryTrace() {
  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">批次追溯</h2></div>' +
  '</div>';

  // Search
  html += '<div class="search-bar">' +
    '<div class="form-group" style="flex:1"><label class="form-label">批次号</label><input class="form-input" placeholder="请输入批次号查询" value="BN20260401-01"></div>' +
    '<button class="btn btn-primary">查询追溯</button>' +
  '</div>';

  // Trace result
  html += '<div class="grid-2">';

  // Left: Timeline
  html += '<div class="card">';
  html += '<div class="card-header">批次生命周期</div>';
  html += '<div class="card-body">';

  var traceData = MockData.batchTrace || [
    { title: '采购入库', detail: '2026-04-01 09:30 | 供应商: 上海华谊化工 | 入库数量: 500kg', status: 'success' },
    { title: '质检合格', detail: '2026-04-01 14:20 | 质检员: 张检验 | 结果: 合格 | 纯度: 99.5%', status: 'success' },
    { title: '上架完成', detail: '2026-04-01 16:00 | 库位: A-01-02 | 操作人: 李仓管', status: 'success' },
    { title: '部分出库', detail: '2026-04-08 10:15 | 出库单: CK2026040801 | 出库数量: 100kg | 领用部门: 生产一车间', status: 'active' },
    { title: '库存结存', detail: '当前结存: 400kg | 库位: A-01-02 | 状态: 正常', status: 'active' }
  ];

  html += '<div class="timeline">';
  traceData.forEach(function (t) {
    html += '<div class="timeline-item ' + t.status + '">' +
      '<div class="timeline-dot"></div>' +
      '<div class="timeline-content">' +
        '<div class="timeline-title">' + t.title + '</div>' +
        '<div class="timeline-desc">' + t.detail + '</div>' +
      '</div>' +
    '</div>';
  });
  html += '</div>';
  html += '</div></div>';

  // Right: Batch info
  html += '<div class="card">';
  html += '<div class="card-header">批次信息</div>';
  html += '<div class="card-body">';

  var batchInfo = MockData.batchInfo || {
    batchNo: 'BN20260401-01',
    materialCode: 'M001',
    materialName: '甲苯',
    spec: '99.5% 工业级',
    supplier: '上海华谊化工',
    inboundQty: 500,
    currentQty: 400,
    unit: 'kg',
    location: 'A-01-02',
    inboundDate: '2026-04-01',
    expiryDate: '2027-04-01',
    hazardLevel: 2,
    cas: '108-88-3'
  };

  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
    '<div class="form-group"><label class="form-label">批次号</label><div>' + batchInfo.batchNo + '</div></div>' +
    '<div class="form-group"><label class="form-label">物料编码</label><div>' + batchInfo.materialCode + '</div></div>' +
    '<div class="form-group"><label class="form-label">物料名称</label><div>' + batchInfo.materialName + '</div></div>' +
    '<div class="form-group"><label class="form-label">规格</label><div>' + batchInfo.spec + '</div></div>' +
    '<div class="form-group"><label class="form-label">供应商</label><div>' + batchInfo.supplier + '</div></div>' +
    '<div class="form-group"><label class="form-label">CAS号</label><div>' + batchInfo.cas + '</div></div>' +
    '<div class="form-group"><label class="form-label">入库数量</label><div>' + batchInfo.inboundQty + ' ' + batchInfo.unit + '</div></div>' +
    '<div class="form-group"><label class="form-label">当前结存</label><div style="color:var(--color-primary);font-weight:600">' + batchInfo.currentQty + ' ' + batchInfo.unit + '</div></div>' +
    '<div class="form-group"><label class="form-label">库位</label><div><span class="tag tag-info">' + batchInfo.location + '</span></div></div>' +
    '<div class="form-group"><label class="form-label">危化品等级</label><div>' + getHazardTag(batchInfo.hazardLevel) + '</div></div>' +
    '<div class="form-group"><label class="form-label">入库日期</label><div>' + batchInfo.inboundDate + '</div></div>' +
    '<div class="form-group"><label class="form-label">保质期截止</label><div>' + batchInfo.expiryDate + '</div></div>' +
  '</div>';

  html += '</div></div>';
  html += '</div>'; // end grid-2

  return html;
}

// ---------------------------------------------------------------------------
// 11. Counting
// ---------------------------------------------------------------------------
function renderCounting() {
  var plans = MockData.countingPlans;

  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">盘点管理</h2></div>' +
    '<div class="toolbar-right">' +
      '<select class="form-select" style="width:140px"><option value="">全部状态</option><option>待盘点</option><option>盘点中</option><option>已完成</option></select>' +
      '<button class="btn btn-primary">+ 新建盘点</button>' +
    '</div>' +
  '</div>';

  html += '<div class="card"><div class="card-body" style="padding:0"><div class="table-wrapper">';
  html += '<table class="data-table"><thead><tr>' +
    '<th>盘点单号</th><th>盘点类型</th><th>盘点范围</th><th>盘点人</th><th>计划日期</th><th>状态</th><th>操作</th>' +
  '</tr></thead><tbody>';

  plans.forEach(function (p) {
    html += '<tr>' +
      '<td class="cell-link">' + p.planNo + '</td>' +
      '<td>' + p.type + '</td>' +
      '<td>' + p.scope + '</td>' +
      '<td>' + p.operator + '</td>' +
      '<td>' + p.planDate + '</td>' +
      '<td>' + getStatusTag(p.status) + '</td>' +
      '<td><button class="btn btn-text btn-sm" onclick="showCountingDetail(\'' + p.planNo + '\')">查看</button></td>' +
    '</tr>';
  });

  html += '</tbody></table></div></div>';
  html += '<div class="card-footer"><div class="pagination">' +
    '<div class="page-item disabled">&laquo;</div>' +
    '<div class="page-item active">1</div>' +
    '<div class="page-item">&raquo;</div>' +
  '</div><div class="page-info">共 ' + plans.length + ' 条记录</div></div>';
  html += '</div>';

  return html;
}

function showCountingDetail(planNo) {
  var p = MockData.countingPlans.find(function (item) { return item.planNo === planNo; });
  if (!p) return;

  var body = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">' +
    '<div class="form-group"><label class="form-label">盘点单号</label><div>' + p.planNo + '</div></div>' +
    '<div class="form-group"><label class="form-label">盘点类型</label><div>' + p.type + '</div></div>' +
    '<div class="form-group"><label class="form-label">盘点范围</label><div>' + p.scope + '</div></div>' +
    '<div class="form-group"><label class="form-label">盘点人</label><div>' + p.operator + '</div></div>' +
    '<div class="form-group"><label class="form-label">计划日期</label><div>' + p.planDate + '</div></div>' +
    '<div class="form-group"><label class="form-label">状态</label><div>' + getStatusTag(p.status) + '</div></div>' +
  '</div>';

  if (p.results) {
    body += '<h4 style="margin-bottom:8px">差异明细</h4>';
    body += '<table class="data-table"><thead><tr><th>物料名称</th><th>库位</th><th>账面数量</th><th>实盘数量</th><th>差异</th><th>差异原因</th></tr></thead><tbody>';
    p.results.forEach(function (r) {
      var diff = r.actualQty - r.bookQty;
      var diffClass = diff < 0 ? 'text-danger' : (diff > 0 ? 'text-success' : '');
      var diffText = diff > 0 ? '+' + diff : diff;
      body += '<tr>' +
        '<td>' + r.material + '</td>' +
        '<td>' + r.location + '</td>' +
        '<td>' + r.bookQty + '</td>' +
        '<td>' + r.actualQty + '</td>' +
        '<td class="' + diffClass + ' font-bold">' + diffText + '</td>' +
        '<td>' + (r.reason || '-') + '</td>' +
      '</tr>';
    });
    body += '</tbody></table>';
  }

  showModal('盘点详情 - ' + p.planNo, body);
}

// ---------------------------------------------------------------------------
// 12. Warehouse Operations
// ---------------------------------------------------------------------------
function renderWarehouseOps() {
  var ops = MockData.warehouseOps;

  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">库内作业</h2></div>' +
    '<div class="toolbar-right"><button class="btn btn-primary">+ 新建作业单</button></div>' +
  '</div>';

  // Tabs
  html += '<div class="tabs" data-tab-group="whops">' +
    '<div class="tab-item active" data-tab="move" onclick="switchTab(\'whops\',\'move\')">移库</div>' +
    '<div class="tab-item" data-tab="replenish" onclick="switchTab(\'whops\',\'replenish\')">补货</div>' +
    '<div class="tab-item" data-tab="scrap" onclick="switchTab(\'whops\',\'scrap\')">报废</div>' +
  '</div>';

  var types = ['移库', '补货', '报废'];
  var tabKeys = ['move', 'replenish', 'scrap'];

  tabKeys.forEach(function (key, idx) {
    var filtered = ops.filter(function (o) { return o.type === types[idx]; });
    var display = key === 'move' ? 'block' : 'none';

    html += '<div data-tab-content-group="whops" data-tab-content="' + key + '" style="display:' + display + '">';
    html += '<div class="card"><div class="card-body" style="padding:0"><div class="table-wrapper">';
    html += '<table class="data-table"><thead><tr>' +
      '<th>作业单号</th><th>作业类型</th><th>物料</th><th>批次号</th><th>源库位</th><th>目标库位</th><th>数量</th><th>操作人</th><th>时间</th><th>状态</th>' +
    '</tr></thead><tbody>';

    filtered.forEach(function (o) {
      html += '<tr>' +
        '<td class="cell-link">' + o.opNo + '</td>' +
        '<td>' + o.type + '</td>' +
        '<td>' + o.material + '</td>' +
        '<td>' + o.batchNo + '</td>' +
        '<td><span class="tag tag-default">' + o.fromLocation + '</span></td>' +
        '<td><span class="tag tag-info">' + o.toLocation + '</span></td>' +
        '<td>' + o.qty + '</td>' +
        '<td>' + o.operator + '</td>' +
        '<td>' + o.time + '</td>' +
        '<td>' + getStatusTag(o.status) + '</td>' +
      '</tr>';
    });

    if (filtered.length === 0) {
      html += '<tr><td colspan="10" class="text-center text-muted" style="padding:40px">暂无数据</td></tr>';
    }

    html += '</tbody></table></div></div></div></div>';
  });

  return html;
}

// ---------------------------------------------------------------------------
// 13. Barcode / Label Management
// ---------------------------------------------------------------------------
function renderBarcode() {
  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">条码/标签管理</h2></div>' +
  '</div>';

  var labelTypes = [
    {
      title: '库位标签',
      icon: '&#128206;',
      desc: '用于标识仓库库位，包含库位编码、库区、库位类型信息',
      code: 'LOC-A-01-01',
      fields: ['库位编码: A-01-01', '库区: A区-普通存储区', '类型: 普通', '承重: 1000kg']
    },
    {
      title: '物料标签',
      icon: '&#127991;',
      desc: '粘贴在物料包装上，包含物料信息及批次号',
      code: 'MAT-M001-BN01',
      fields: ['物料: M001 甲苯', '批次: BN20260401-01', '规格: 99.5% 工业级', '危化品: 2级-易燃易爆']
    },
    {
      title: '待检卡',
      icon: '&#128203;',
      desc: '标识待检物料，用于质检流程管理',
      code: 'QC-20260414-001',
      fields: ['质检单号: QC20260414001', '物料: 乙醇', '供应商: 上海华谊化工', '待检数量: 300kg']
    },
    {
      title: '发货标签',
      icon: '&#128666;',
      desc: '用于出库发货标识，包含出库单号及客户信息',
      code: 'SHP-CK041001',
      fields: ['出库单: CK2026041001', '客户: 生产一车间', '物料: 甲苯 100kg', '日期: 2026-04-14']
    }
  ];

  html += '<div class="grid-2">';

  labelTypes.forEach(function (label) {
    html += '<div class="card">';
    html += '<div class="card-header">' +
      '<div style="display:flex;align-items:center;gap:8px"><span style="font-size:18px">' + label.icon + '</span>' + label.title + '</div>' +
      '<div class="card-actions"><button class="btn btn-primary btn-sm">打印</button></div>' +
    '</div>';
    html += '<div class="card-body">';
    html += '<p class="text-secondary text-sm mb-16">' + label.desc + '</p>';

    // Barcode preview
    html += '<div style="display:flex;justify-content:center;margin-bottom:16px">';
    html += generateBarcodeHtml(label.code);
    html += '</div>';

    // Label info
    html += '<div style="background:var(--page-bg);border-radius:6px;padding:12px">';
    label.fields.forEach(function (f) {
      html += '<div style="font-size:12px;color:var(--text-secondary);padding:2px 0">' + f + '</div>';
    });
    html += '</div>';

    html += '</div></div>';
  });

  html += '</div>';

  return html;
}

// ---------------------------------------------------------------------------
// 14. Safety Ledger
// ---------------------------------------------------------------------------
function renderSafetyLedger() {
  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">危化品台账</h2></div>' +
    '<div class="toolbar-right">' +
      '<button class="btn btn-outline">导出Excel</button>' +
      '<button class="btn btn-outline">导出PDF</button>' +
      '<button class="btn btn-primary">生成合规报告</button>' +
    '</div>' +
  '</div>';

  // 危化品分级统计
  html += '<div class="stat-row mb-16">' +
    '<div class="stat-box"><div class="stat-icon" style="background:#FEF2F2;color:#EF4444">&#9888;</div><div><div class="stat-value">5</div><div class="stat-label">1级-剧毒品</div></div></div>' +
    '<div class="stat-box"><div class="stat-icon" style="background:#FFF7ED;color:#F97316">&#9888;</div><div><div class="stat-value">12</div><div class="stat-label">2级-易燃易爆</div></div></div>' +
    '<div class="stat-box"><div class="stat-icon" style="background:#FFFBEB;color:#D97706">&#9888;</div><div><div class="stat-value">8</div><div class="stat-label">3级-腐蚀品</div></div></div>' +
    '<div class="stat-box"><div class="stat-icon" style="background:#F0FDF4;color:#16A34A">&#10003;</div><div><div class="stat-value">25</div><div class="stat-label">4级-一般危化品</div></div></div>' +
  '</div>';

  // Filter bar
  html += '<div class="search-bar">' +
    '<div class="form-group"><label class="form-label">开始日期</label><input class="form-input" type="date" value="2026-04-01"></div>' +
    '<div class="form-group"><label class="form-label">结束日期</label><input class="form-input" type="date" value="2026-04-16"></div>' +
    '<div class="form-group"><label class="form-label">物料名称</label><input class="form-input" placeholder="请输入物料名称"></div>' +
    '<div class="form-group"><label class="form-label">CAS号</label><input class="form-input" placeholder="请输入CAS号"></div>' +
    '<div class="form-group"><label class="form-label">危化品等级</label>' +
      '<select class="form-select"><option value="">全部</option><option>1级-剧毒</option><option>2级-易燃易爆</option><option>3级-腐蚀</option><option>4级-一般</option></select>' +
    '</div>' +
    '<button class="btn btn-primary">查询</button>' +
    '<button class="btn btn-outline">重置</button>' +
  '</div>';

  // Alert
  html += '<div class="alert alert-warning mb-16">' +
    '<div class="alert-icon">&#9888;</div>' +
    '<div class="alert-content"><div class="alert-title">合规提醒</div>根据《危险化学品安全管理条例》要求，危化品台账需实时更新，电子台账保存30年，操作日志保存2年以上。</div>' +
  '</div>';

  // Table - 增强显示UN编号、危化品等级
  html += '<div class="card"><div class="card-body" style="padding:0"><div class="table-wrapper">';
  html += '<table class="data-table"><thead><tr>' +
    '<th>物料名称</th><th>CAS号</th><th>UN编号</th><th>危化品等级</th><th>批次号</th><th>入库时间</th><th>入库数量</th><th>出库时间</th><th>出库数量</th><th>结存数量</th><th>存放位置</th><th>操作人</th>' +
  '</tr></thead><tbody>';

  // 模拟增强数据
  var enhancedLedger = [
    { materialName: '甲苯', cas: '108-88-3', un: 'UN1294', hazardLevel: 2, batchNo: 'BT20260320001', inDate: '2026-03-20', inQty: 2000, outDate: '2026-04-12', outQty: 800, balance: 1200, location: 'A-01-01', operator: '张伟' },
    { materialName: '丙酮', cas: '67-64-1', un: 'UN1090', hazardLevel: 2, batchNo: 'BT20260318003', inDate: '2026-03-18', inQty: 960, outDate: '2026-04-08', outQty: 320, balance: 640, location: 'A-01-02', operator: '张伟' },
    { materialName: '乙酸乙酯', cas: '141-78-6', un: 'UN1173', hazardLevel: 2, batchNo: 'BT20260310005', inDate: '2026-03-10', inQty: 900, outDate: '2026-04-05', outQty: 180, balance: 720, location: 'A-01-04', operator: '李强' },
    { materialName: '二甲苯', cas: '1330-20-7', un: 'UN1307', hazardLevel: 2, batchNo: 'BT20260301002', inDate: '2026-03-01', inQty: 1500, outDate: '2026-04-13', outQty: 600, balance: 900, location: 'A-02-01', operator: '李强' },
    { materialName: '环己酮', cas: '108-94-1', un: 'UN1915', hazardLevel: 2, batchNo: 'BT20260411013', inDate: '2026-04-11', inQty: 795, outDate: '2026-04-13', outQty: 160, balance: 635, location: 'G-01-04', operator: '赵刚' },
    { materialName: '氢氧化钠', cas: '1310-73-2', un: 'UN1823', hazardLevel: 3, batchNo: 'BT20260228014', inDate: '2026-02-28', inQty: 2000, outDate: '2026-04-11', outQty: 500, balance: 1500, location: 'H-01-01', operator: '刘明' },
    { materialName: '过氧化氢', cas: '7722-84-1', un: 'UN2014', hazardLevel: 3, batchNo: 'BT20260115009', inDate: '2026-01-15', inQty: 100, outDate: '2026-03-28', outQty: 40, balance: 60, location: 'H-01-02', operator: '刘明' }
  ];

  enhancedLedger.forEach(function (item) {
    html += '<tr>' +
      '<td class="font-semibold">' + item.materialName + '</td>' +
      '<td>' + item.cas + '</td>' +
      '<td>' + item.un + '</td>' +
      '<td>' + getHazardTag(item.hazardLevel) + '</td>' +
      '<td>' + item.batchNo + '</td>' +
      '<td>' + item.inDate + '</td>' +
      '<td>' + item.inQty + '</td>' +
      '<td>' + (item.outDate || '-') + '</td>' +
      '<td>' + (item.outQty || '-') + '</td>' +
      '<td class="font-bold">' + item.balance + '</td>' +
      '<td><span class="tag tag-info">' + item.location + '</span></td>' +
      '<td>' + item.operator + '</td>' +
    '</tr>';
  });

  html += '</tbody></table></div></div>';
  html += '<div class="card-footer"><div class="pagination">' +
    '<div class="page-item disabled">&laquo;</div>' +
    '<div class="page-item active">1</div>' +
    '<div class="page-item">2</div>' +
    '<div class="page-item">&raquo;</div>' +
  '</div><div class="page-info">共 ' + enhancedLedger.length + ' 条记录</div></div>';
  html += '</div>';

  return html;
}

// ---------------------------------------------------------------------------
// 15. Safety Log (Operation Log)
// ---------------------------------------------------------------------------
function renderSafetyLog() {
  var logs = MockData.operationLogs;

  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">操作日志</h2></div>' +
    '<div class="toolbar-right"><button class="btn btn-outline">导出日志</button></div>' +
  '</div>';

  // Filter bar
  html += '<div class="search-bar">' +
    '<div class="form-group"><label class="form-label">开始时间</label><input class="form-input" type="date" value="2026-04-01"></div>' +
    '<div class="form-group"><label class="form-label">结束时间</label><input class="form-input" type="date" value="2026-04-14"></div>' +
    '<div class="form-group"><label class="form-label">操作人</label><input class="form-input" placeholder="请输入操作人"></div>' +
    '<div class="form-group"><label class="form-label">操作类型</label>' +
      '<select class="form-select"><option value="">全部</option><option>入库</option><option>出库</option><option>移库</option><option>盘点</option><option>质检</option><option>系统</option></select>' +
    '</div>' +
    '<button class="btn btn-primary">查询</button>' +
    '<button class="btn btn-outline">重置</button>' +
  '</div>';

  // Table
  html += '<div class="card"><div class="card-body" style="padding:0"><div class="table-wrapper">';
  html += '<table class="data-table"><thead><tr>' +
    '<th>操作时间</th><th>操作人</th><th>设备号</th><th>操作类型</th><th>操作内容</th><th>详情</th>' +
  '</tr></thead><tbody>';

  logs.forEach(function (log, index) {
    var typeMap = {
      '入库': 'success', '出库': 'info', '移库': 'warning', '盘点': 'default', '质检': 'warning', '系统': 'danger', '登录': 'default'
    };
    var typeTag = '<span class="tag tag-' + (typeMap[log.type] || 'default') + '">' + log.type + '</span>';

    html += '<tr>' +
      '<td>' + log.time + '</td>' +
      '<td>' + log.operator + '</td>' +
      '<td>' + log.device + '</td>' +
      '<td>' + typeTag + '</td>' +
      '<td>' + log.content + '</td>' +
      '<td><button class="btn btn-text btn-sm" onclick="showLogDetail(' + index + ')">详情</button></td>' +
    '</tr>';
  });

  html += '</tbody></table></div></div>';
  html += '<div class="card-footer"><div class="pagination">' +
    '<div class="page-item disabled">&laquo;</div>' +
    '<div class="page-item active">1</div>' +
    '<div class="page-item">2</div>' +
    '<div class="page-item">3</div>' +
    '<div class="page-item">&raquo;</div>' +
  '</div><div class="page-info">共 ' + logs.length + ' 条记录</div></div>';
  html += '</div>';

  return html;
}

function showLogDetail(index) {
  var log = MockData.operationLogs[index];
  if (!log) return;
  var body = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">' +
    '<div class="form-group"><label class="form-label">操作时间</label><div>' + log.time + '</div></div>' +
    '<div class="form-group"><label class="form-label">操作人</label><div>' + log.operator + '</div></div>' +
    '<div class="form-group"><label class="form-label">设备号</label><div>' + log.device + '</div></div>' +
    '<div class="form-group"><label class="form-label">操作类型</label><div>' + log.type + '</div></div>' +
    '<div class="form-group" style="grid-column:1/-1"><label class="form-label">操作内容</label><div>' + log.content + '</div></div>' +
    '<div class="form-group" style="grid-column:1/-1"><label class="form-label">IP地址</label><div>' + (log.ip || '192.168.1.100') + '</div></div>' +
  '</div>';
  showModal('日志详情', body);
}

// ---------------------------------------------------------------------------
// 16. Reports
// ---------------------------------------------------------------------------
function renderReports() {
  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">报表中心</h2></div>' +
  '</div>';

  var categories = [
    {
      title: '库存类报表',
      icon: '&#128230;',
      iconBg: '#EBF1FF',
      iconColor: '#2F6BFF',
      count: 5,
      reports: ['库存余额日报', '库龄分析', '周转率报表', '危化品库存报表', '效期预警报表']
    },
    {
      title: '效率类报表',
      icon: '&#9889;',
      iconBg: '#ECFDF5',
      iconColor: '#22C55E',
      count: 4,
      reports: ['收货效率报表', '拣货效率报表', '订单准时率报表', '作业量统计报表']
    },
    {
      title: '质量类报表',
      icon: '&#128203;',
      iconBg: '#FFFBEB',
      iconColor: '#F59E0B',
      count: 3,
      reports: ['质检合格率报表', '盘点差异报表', '报废统计报表']
    },
    {
      title: '安全合规类报表',
      icon: '&#128737;',
      iconBg: '#FEF2F2',
      iconColor: '#EF4444',
      count: 3,
      reports: ['危化品台账报表', '操作日志报表', '存储状态报表']
    }
  ];

  html += '<div class="grid-2">';

  categories.forEach(function (cat) {
    html += '<div class="card" style="cursor:pointer" onclick="showReportCategory(\'' + cat.title + '\')">';
    html += '<div class="card-body">';
    html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">';
    html += '<div style="width:48px;height:48px;border-radius:12px;background:' + cat.iconBg + ';color:' + cat.iconColor + ';display:flex;align-items:center;justify-content:center;font-size:22px">' + cat.icon + '</div>';
    html += '<div><div style="font-size:16px;font-weight:600">' + cat.title + '</div><div class="text-secondary text-sm">' + cat.count + ' 份报表</div></div>';
    html += '</div>';

    html += '<div style="border-top:1px solid var(--border-color);padding-top:12px">';
    cat.reports.forEach(function (r) {
      html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;font-size:13px">' +
        '<span>' + r + '</span>' +
        '<span class="text-primary" style="cursor:pointer;font-size:12px">查看 &rarr;</span>' +
      '</div>';
    });
    html += '</div>';

    html += '</div></div>';
  });

  html += '</div>';

  return html;
}

function showReportCategory(title) {
  var body = '<div class="alert alert-info mb-16">' +
    '<div class="alert-icon">&#128712;</div>' +
    '<div class="alert-content">以下为 <strong>' + title + '</strong> 的示例报表预览。实际报表可根据筛选条件生成。</div>' +
  '</div>';

  // Sample report preview
  body += '<div style="margin-bottom:16px">';
  body += '<h4 style="margin-bottom:12px">数据概览</h4>';
  body += '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:16px">' +
    '<div style="background:var(--page-bg);padding:12px;border-radius:6px;text-align:center"><div style="font-size:24px;font-weight:700;color:var(--color-primary)">1,256</div><div class="text-sm text-secondary">数据总量</div></div>' +
    '<div style="background:var(--page-bg);padding:12px;border-radius:6px;text-align:center"><div style="font-size:24px;font-weight:700;color:var(--color-success)">98.5%</div><div class="text-sm text-secondary">达标率</div></div>' +
    '<div style="background:var(--page-bg);padding:12px;border-radius:6px;text-align:center"><div style="font-size:24px;font-weight:700;color:var(--color-warning)">12</div><div class="text-sm text-secondary">异常项</div></div>' +
  '</div>';
  body += '</div>';

  // Sample table
  body += '<table class="data-table"><thead><tr><th>指标</th><th>本月</th><th>上月</th><th>环比</th></tr></thead><tbody>' +
    '<tr><td>总处理量</td><td>12,580</td><td>11,230</td><td class="text-success">+12.0%</td></tr>' +
    '<tr><td>准时完成率</td><td>96.8%</td><td>95.2%</td><td class="text-success">+1.6%</td></tr>' +
    '<tr><td>异常率</td><td>1.2%</td><td>2.1%</td><td class="text-success">-0.9%</td></tr>' +
    '<tr><td>满意度</td><td>4.8</td><td>4.6</td><td class="text-success">+0.2</td></tr>' +
  '</tbody></table>';

  showModal(title, body);
}

// ---------------------------------------------------------------------------
// 17. System Management
// ---------------------------------------------------------------------------
function renderSystem() {
  var html = '<div class="toolbar">' +
    '<div class="toolbar-left"><h2 style="font-size:18px;font-weight:700">系统管理</h2></div>' +
  '</div>';

  // Tabs
  html += '<div class="tabs" data-tab-group="system">' +
    '<div class="tab-item active" data-tab="sys-users" onclick="switchTab(\'system\',\'sys-users\')">用户管理</div>' +
    '<div class="tab-item" data-tab="sys-roles" onclick="switchTab(\'system\',\'sys-roles\')">角色管理</div>' +
    '<div class="tab-item" data-tab="sys-config" onclick="switchTab(\'system\',\'sys-config\')">系统配置</div>' +
  '</div>';

  // ------ Tab: Users ------
  html += '<div data-tab-content-group="system" data-tab-content="sys-users" style="display:block">';
  html += '<div class="toolbar"><div class="toolbar-left">' +
    '<input class="form-input" style="width:200px" placeholder="搜索用户名/姓名">' +
  '</div><div class="toolbar-right"><button class="btn btn-primary">+ 新增用户</button></div></div>';

  html += '<div class="card"><div class="card-body" style="padding:0"><div class="table-wrapper">';
  html += '<table class="data-table"><thead><tr>' +
    '<th>用户名</th><th>姓名</th><th>角色</th><th>部门</th><th>手机</th><th>状态</th><th>最后登录</th><th>操作</th>' +
  '</tr></thead><tbody>';

  MockData.users.forEach(function (u) {
    html += '<tr>' +
      '<td class="cell-link">' + u.username + '</td>' +
      '<td>' + u.realName + '</td>' +
      '<td>' + u.role + '</td>' +
      '<td>' + u.department + '</td>' +
      '<td>' + u.phone + '</td>' +
      '<td>' + getStatusTag(u.status) + '</td>' +
      '<td>' + u.lastLogin + '</td>' +
      '<td class="cell-actions">' +
        '<button class="btn btn-text btn-sm">编辑</button>' +
        '<button class="btn btn-text btn-sm" style="color:var(--color-danger)">禁用</button>' +
      '</td>' +
    '</tr>';
  });

  html += '</tbody></table></div></div></div></div>';

  // ------ Tab: Roles ------
  html += '<div data-tab-content-group="system" data-tab-content="sys-roles" style="display:none">';

  var roles = MockData.roles || [
    { name: '系统管理员', desc: '拥有系统全部权限', userCount: 2 },
    { name: '仓库主管', desc: '管理仓库日常运营', userCount: 3 },
    { name: '仓管员', desc: '执行收发货及库内作业', userCount: 8 },
    { name: '质检员', desc: '负责入库物料质检', userCount: 4 },
    { name: '安全管理员', desc: '管理危化品安全合规', userCount: 2 },
    { name: '查看员', desc: '只读查看权限', userCount: 5 }
  ];

  var permissions = ['基础数据管理', '入库管理', '出库管理', '库存管理', '盘点管理', '库内作业', '条码管理', '安全合规', '报表查看', '系统管理'];

  html += '<div class="grid-2">';

  // Left: Role list
  html += '<div class="card">';
  html += '<div class="card-header">角色列表<div class="card-actions"><button class="btn btn-primary btn-sm">+ 新增角色</button></div></div>';
  html += '<div class="card-body" style="padding:0">';

  roles.forEach(function (role, idx) {
    var selected = idx === 0 ? 'background:var(--color-primary-bg);' : '';
    html += '<div style="padding:12px 20px;border-bottom:1px solid var(--border-color);cursor:pointer;' + selected + '" onclick="this.parentElement.querySelectorAll(\'div\').forEach(d=>d.style.background=\'\');this.style.background=\'var(--color-primary-bg)\'">' +
      '<div style="display:flex;justify-content:space-between;align-items:center">' +
        '<div><div class="font-semibold">' + role.name + '</div><div class="text-sm text-secondary">' + role.desc + '</div></div>' +
        '<span class="badge badge-primary">' + role.userCount + '</span>' +
      '</div>' +
    '</div>';
  });

  html += '</div></div>';

  // Right: Permission configuration
  html += '<div class="card">';
  html += '<div class="card-header">权限配置 - 系统管理员</div>';
  html += '<div class="card-body">';

  permissions.forEach(function (perm) {
    html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-color)">' +
      '<span>' + perm + '</span>' +
      '<div style="display:flex;gap:12px">' +
        '<label class="form-check"><input type="checkbox" checked>查看</label>' +
        '<label class="form-check"><input type="checkbox" checked>编辑</label>' +
        '<label class="form-check"><input type="checkbox" checked>删除</label>' +
        '<label class="form-check"><input type="checkbox" checked>导出</label>' +
      '</div>' +
    '</div>';
  });

  html += '<div style="margin-top:16px;text-align:right"><button class="btn btn-primary">保存配置</button></div>';
  html += '</div></div>';
  html += '</div></div>';

  // ------ Tab: Config ------
  html += '<div data-tab-content-group="system" data-tab-content="sys-config" style="display:none">';
  html += '<div class="card">';
  html += '<div class="card-header">系统配置</div>';
  html += '<div class="card-body">';

  html += '<h4 style="margin-bottom:12px">单据编号规则</h4>';
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px">' +
    '<div class="form-group"><label class="form-label">入库单前缀</label><input class="form-input" value="RK"></div>' +
    '<div class="form-group"><label class="form-label">出库单前缀</label><input class="form-input" value="CK"></div>' +
    '<div class="form-group"><label class="form-label">盘点单前缀</label><input class="form-input" value="PD"></div>' +
    '<div class="form-group"><label class="form-label">作业单前缀</label><input class="form-input" value="OP"></div>' +
    '<div class="form-group"><label class="form-label">编号格式</label><select class="form-select"><option>前缀+年月日+流水号(4位)</option><option>前缀+年月日+流水号(6位)</option></select></div>' +
    '<div class="form-group"><label class="form-label">流水号重置</label><select class="form-select"><option>每日重置</option><option>每月重置</option><option>不重置</option></select></div>' +
  '</div>';

  html += '<div class="divider"></div>';

  html += '<h4 style="margin-bottom:12px">预警阈值设置</h4>';
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px">' +
    '<div class="form-group"><label class="form-label">效期预警天数</label><input class="form-input" type="number" value="30"><div class="form-hint">距保质期截止不足此天数时触发预警</div></div>' +
    '<div class="form-group"><label class="form-label">库存下限预警</label><input class="form-input" type="number" value="100"><div class="form-hint">库存低于此数量时触发预警</div></div>' +
    '<div class="form-group"><label class="form-label">危化品库存上限(kg)</label><input class="form-input" type="number" value="5000"><div class="form-hint">危化品总库存超过此值时预警</div></div>' +
    '<div class="form-group"><label class="form-label">温度预警范围(°C)</label><div style="display:flex;gap:8px;align-items:center"><input class="form-input" type="number" value="-5" style="width:80px"> ~ <input class="form-input" type="number" value="40" style="width:80px"></div></div>' +
  '</div>';

  html += '<div class="divider"></div>';

  html += '<h4 style="margin-bottom:12px">其他配置</h4>';
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px">' +
    '<div class="form-group"><label class="form-label">系统名称</label><input class="form-input" value="化工企业WMS仓储管理系统"></div>' +
    '<div class="form-group"><label class="form-label">企业名称</label><input class="form-input" value="XX化工有限公司"></div>' +
    '<div class="form-group"><label class="form-label">日志保留天数</label><input class="form-input" type="number" value="365"></div>' +
    '<div class="form-group"><label class="form-label">会话超时(分钟)</label><input class="form-input" type="number" value="30"></div>' +
  '</div>';

  html += '</div>';
  html += '<div class="card-footer"><button class="btn btn-outline">重置默认</button><button class="btn btn-primary">保存配置</button></div>';
  html += '</div></div>';

  return html;
}

// ---------------------------------------------------------------------------
// Additional CSS for row-warning and row-danger (injected at runtime)
// ---------------------------------------------------------------------------
(function injectRowStyles() {
  var style = document.createElement('style');
  style.textContent =
    '.row-warning { background: #FFFBEB !important; }' +
    '.row-warning:hover { background: #FFF3C4 !important; }' +
    '.row-danger { background: #FEF2F2 !important; }' +
    '.row-danger:hover { background: #FECACA !important; }' +
    '.header-notification { position:relative;cursor:pointer;display:flex;align-items:center; }' +
    '.header-notification .badge { position:absolute;top:-6px;right:-8px; }' +
    '.user-avatar { width:32px;height:32px;border-radius:50%;background:var(--color-primary-bg);color:var(--color-primary);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:13px; }' +
    '.menu-group-title { display:flex;align-items:center;padding:10px 20px;color:rgba(255,255,255,0.7);font-size:13px;cursor:pointer;transition:all 0.2s ease;gap:10px;user-select:none; }' +
    '.menu-group-title:hover { background:var(--sidebar-hover);color:#fff; }' +
    '.menu-group-title .menu-icon { width:18px;height:18px;flex-shrink:0; }' +
    '.menu-group-title span { flex:1; }' +
    '.menu-group-title .menu-arrow { width:14px;height:14px;transition:transform 0.2s ease;flex-shrink:0;flex-grow:0; }' +
    '.submenu.open ~ .menu-group-title .menu-arrow, .menu-group-title:has(~ .submenu.open) .menu-arrow { transform:rotate(180deg); }' +
    '.policy-item { display:flex;align-items:center;gap:8px;padding:6px 0;font-size:13px;color:var(--text-secondary); }' +
    '.policy-dot { width:8px;height:8px;border-radius:50%;flex-shrink:0; }' +
    '.policy-dot.danger { background:var(--color-danger); }' +
    '.policy-dot.success { background:var(--color-success); }' +
    '.location-recommend { display:flex;flex-direction:column;gap:12px; }' +
    '.location-item { display:flex;align-items:center;gap:12px;padding:12px;background:var(--page-bg);border-radius:8px; }' +
    '.location-rank { width:28px;height:28px;border-radius:50%;background:var(--color-primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;flex-shrink:0; }' +
    '.location-info { flex:1; }' +
    '.location-score { text-align:right; }' +
    '.location-score .score { font-size:18px;font-weight:700;color:var(--color-primary); }';
  document.head.appendChild(style);
})();

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  navigateTo('dashboard');
});
