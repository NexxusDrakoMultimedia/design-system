/* @ds-bundle: {"format":4,"namespace":"NexxusDrako","components":[{"name":"Button"},{"name":"Tag"},{"name":"StatusBadge"},{"name":"LiveBadge"},{"name":"Alert"},{"name":"Avatar"},{"name":"SectionHeading"},{"name":"ProjectCard"},{"name":"TwitchPanel"},{"name":"LowerThird"},{"name":"Icon"},{"name":"StreamScreen"},{"name":"StreamAlert"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k) && keys.indexOf(k) < 0) r[k] = o[k]; return r; }

  var ICONS = {"play":["M8 5v14l11-7z"],"music":["M9 18V5l12-2v13","M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z","M18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],"book":["M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z","M20 17v4H6.5A2.5 2.5 0 0 1 4 18.5"],"gamepad":["M7 6h10a5 5 0 0 1 4.9 6l-.7 3.5a2.5 2.5 0 0 1-4.3 1.2L15 15H9l-1.9 1.7a2.5 2.5 0 0 1-4.3-1.2L2.1 12A5 5 0 0 1 7 6z","M7 10v3M5.5 11.5h3","M16 10.5h.01M18 12.5h.01"],"steering-wheel":["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z","M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z","M3 12h7M14 12h7M12 14v7"],"flag":["M5 21V4","M5 4h14l-3 4.5 3 4.5H5"],"mic":["M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z","M19 10v2a7 7 0 0 1-14 0v-2","M12 19v3"],"radio":["M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z","M12 12v9","M8.5 6.5a5 5 0 0 0 0 7","M15.5 6.5a5 5 0 0 1 0 7","M5.5 3.5a9 9 0 0 0 0 13","M18.5 3.5a9 9 0 0 1 0 13"],"pen":["M4 20l4-1 11-11-3-3L5 16z","M14 6l3 3"],"code":["M8 7l-5 5 5 5","M16 7l5 5-5 5"],"calendar":["M3 6h18v15H3z","M3 10h18","M8 3v4M16 3v4"],"clock":["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z","M12 7v5l3 2"],"users":["M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z","M2 21a7 7 0 0 1 14 0","M16 3.5a4 4 0 0 1 0 7","M22 21a7 7 0 0 0-4-6.3"],"heart":["M12 20s-7-4.35-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.65-9 9-9 9z"],"star":["M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3.2 9.5l6.1-.9z"],"link":["M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1","M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"],"external":["M14 4h6v6","M20 4l-9 9","M18 14v6H4V6h6"],"mail":["M3 5h18v14H3z","M3 6l9 7 9-7"],"download":["M12 4v11","M7 10l5 5 5-5","M4 20h16"],"search":["M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z","M20 20l-4-4"],"menu":["M4 7h16M4 12h16M4 17h16"],"close":["M6 6l12 12M18 6L6 18"],"arrow-right":["M5 12h14","M13 6l6 6-6 6"],"check":["M5 12l5 5 9-10"],"info":["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z","M12 11v6","M12 7.5v.01"],"warning":["M12 3l10 18H2z","M12 10v4","M12 17.5v.01"],"error":["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z","M9 9l6 6M15 9l-6 6"]};
  function Icon(props) {
    var size = props.size || 24, paths = ICONS[props.name] || [];
    var a11y = props.label ? { role: 'img', 'aria-label': props.label } : { 'aria-hidden': 'true' };
    return h('svg', Object.assign({ className: cx('nd-icon', props.className), viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, a11y),
      paths.map(function (d, i) { return h('path', { key: i, d: d }); }));
  }
  var STATUS_ICON = { success: 'check', warning: 'warning', danger: 'error' };
  var STATUS_WORD = { success: 'Success', warning: 'Warning', danger: 'Error' };

  function Button(props) {
    var variant = props.variant || 'primary', size = props.size || 'md';
    var rest = omit(props, ['variant', 'size', 'className', 'children']);
    if (!rest.type) rest.type = 'button';
    rest.className = cx('nd-btn', 'nd-btn-' + variant, size === 'sm' && 'nd-btn-sm', props.className);
    return h('button', rest, props.children);
  }

  function Tag(props) {
    return h('span', { className: cx('nd-tag', props.className) }, props.children);
  }

  function StatusBadge(props) {
    var status = props.status || 'success';
    return h('span', { className: cx('nd-status', 'nd-status-' + status, props.className) },
      h(Icon, { name: STATUS_ICON[status], size: 16 }), h('span', null, props.children || STATUS_WORD[status]));
  }

  function LiveBadge(props) {
    return h('span', { className: cx('nd-live', props.className) },
      h('span', { className: 'nd-live-dot', 'aria-hidden': 'true' }), h('span', null, props.children || 'Live'));
  }

  function Alert(props) {
    var status = props.status || 'warning';
    return h('div', { className: cx('nd-alert', 'nd-alert-' + status, props.className), role: status === 'danger' ? 'alert' : 'status' },
      h('span', { className: 'nd-alert-icon' }, h(Icon, { name: STATUS_ICON[status], size: 16 })),
      h('div', null,
        h('p', { className: 'nd-alert-title' }, props.title || STATUS_WORD[status]),
        props.children ? h('div', { className: 'nd-alert-body' }, props.children) : null));
  }

  var AVATAR_PX = { sm: 32, md: 48, lg: 96 };
  function Avatar(props) {
    var px = AVATAR_PX[props.size || 'md'] || 48;
    return h('img', { className: cx('nd-avatar', props.className), src: props.src, alt: props.alt == null ? 'Nexxus Drako' : props.alt, width: px, height: px });
  }

  function SectionHeading(props) {
    var level = props.level || 2;
    return h('div', { className: cx('nd-section', props.className) },
      props.eyebrow ? h('p', { className: 'nd-eyebrow' }, props.eyebrow) : null,
      h('h' + level, { className: 'nd-section-title' }, props.children));
  }

  function ProjectCard(props) {
    return h('article', { className: cx('nd-card', props.className) },
      props.image ? h('img', { className: 'nd-card-img', src: props.image, alt: props.imageAlt || '' }) : null,
      h('div', { className: 'nd-card-body' },
        props.kind ? h(Tag, null, props.kind) : null,
        h('h3', { className: 'nd-card-title' }, props.title),
        props.description ? h('p', { className: 'nd-card-desc' }, props.description) : null,
        props.href ? h('a', { className: 'nd-card-link', href: props.href }, (props.linkLabel || 'View project') + ' →') : null));
  }

  function TwitchPanel(props) {
    return h('section', { className: cx('nd-panel', props.className) },
      h('header', { className: 'nd-panel-head' }, h('h3', { className: 'nd-panel-title' }, props.title)),
      props.children ? h('div', { className: 'nd-panel-body' }, props.children) : null);
  }

  function LowerThird(props) {
    return h('div', { className: cx('nd-lower', props.className) },
      props.avatar ? h('img', { className: 'nd-lower-avatar', src: props.avatar, alt: '' }) : null,
      h('div', { className: 'nd-lower-text' },
        h('div', { className: 'nd-lower-name' }, props.name),
        props.subtitle ? h('div', { className: 'nd-lower-sub' }, props.subtitle) : null));
  }

  var SCREEN_TEXT = { starting: ['Starting soon', 'Grab a drink, the cryptid is waking up.'], brb: ['Be right back', 'Stretching my wings. Back in a few.'], ending: ['Thanks for watching', 'Catch you next stream.'], offline: ['Offline', 'Check the schedule for the next stream.'] };
  function StreamScreen(props) {
    var variant = props.variant || 'starting', t = SCREEN_TEXT[variant] || SCREEN_TEXT.starting;
    return h('div', { className: cx('nd-screen', props.className) },
      h('svg', { className: 'nd-screen-rings', viewBox: '0 0 560 1080', width: 560, height: 1080, 'aria-hidden': 'true' },
        [[170, 130], [420, 370], [170, 610], [420, 850], [170, 1090]].map(function (c, i) { return h('circle', { key: i, cx: c[0], cy: c[1], r: 130 }); })),
      h('div', { className: 'nd-screen-main' },
        props.avatar ? h('img', { className: 'nd-screen-avatar', src: props.avatar, alt: '' }) : null,
        h('div', { className: 'nd-screen-text' },
          h('div', { className: 'nd-screen-title' }, props.title || t[0]),
          h('div', { className: 'nd-screen-sub' }, props.subtitle || t[1]),
          props.detail ? h('div', { className: 'nd-screen-detail' }, props.detail) : null)));
  }

  var ALERT_KIND = { follow: ['heart', 'New follower'], sub: ['star', 'New subscriber'], raid: ['users', 'Incoming raid'], tip: ['music', 'Thank you'] };
  function StreamAlert(props) {
    var k = ALERT_KIND[props.kind || 'follow'] || ALERT_KIND.follow;
    return h('div', { className: cx('nd-salert', props.className), role: 'status' },
      h('div', { className: 'nd-salert-label' }, h(Icon, { name: k[0], size: 20 }), h('span', null, props.label || k[1])),
      h('div', { className: 'nd-salert-name' }, props.name),
      props.message ? h('div', { className: 'nd-salert-msg' }, props.message) : null);
  }

  var api = { Button: Button, Tag: Tag, StatusBadge: StatusBadge, LiveBadge: LiveBadge, Alert: Alert, Avatar: Avatar, SectionHeading: SectionHeading, ProjectCard: ProjectCard, TwitchPanel: TwitchPanel, LowerThird: LowerThird, Icon: Icon, StreamScreen: StreamScreen, StreamAlert: StreamAlert };
  window.NexxusDrako = window.NexxusDrako || {};
  Object.assign(window.NexxusDrako, api);
})();
