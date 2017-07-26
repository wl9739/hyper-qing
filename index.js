'use strict';

let foregroundColor = '#eff0eb';
let red = '#ff5c57';
let green = '#5af78e';
let yellow = '#f3f99d';
let blue = '#57c7ff';
let magenta = '#ff6ac1';
let cyan = '#9aedfe';

exports.decorateConfig = config => {
    const QingConfig = config.QingTheme;
    let ThemeBackground = `rgba(52, 52, 52, 1)`;

    // custom
    if (typeof QingConfig !== 'undefined') {
        exports.onWindow = (browserWindow) => {
            browserWindow.setVibrancy(QingConfig.hasOwnProperty('vibrancy') ? QingConfig.vibrancy : 'dark');
        };

        if (QingConfig.hasOwnProperty('backgroundOpacity')) {
            ThemeBackground = `rgba(52, 52, 52, ${QingConfig.backgroundOpacity || '1'})`;
        }
    }

    config.backgroundColor = ThemeBackground;
    config.foregroundColor = foregroundColor;
    config.borderColor = '#37474F';
    config.cursorColor = '#97979b';
    config.padding = `${config.padding || '24px 24px'}`;

    return Object.assign({}, config, {
        colors: {
            black: '#343434',
            red,
            green,
            yellow,
            blue,
            magenta,
            cyan,
            lightBlack: '#686868',
            lightRed: red,
            lightGreen: green,
            lightYellow: yellow,
            lightBlue: blue,
            lightMagenta: magenta,
            lightCyan: cyan,
            lightWhite: foregroundColor
        },
        termCSS: `
        ${config.termCSS || ''}

        *::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
        }
        `,
        css: `
        ${config.css}
        
        .hyper_main {
            border: none;
        }

		.tabs_title {
			display: none !important;
        }

        .splitpane_divider {
            background-color: rgba(0, 0, 0, 0.2) !important;
        }
    
		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 2px;
			background-color: rgba(0, 150, 136, 1);
            transform: scaleX(0);
            transition: none;
        }

		.tab_first {
			border-left-color: transparent !important;
		}

		.tab_tab:not(.tab_active) {
			color: #666;
        }
    
        .tab_tab {
            border: none;
            color: rgba(255, 255, 255, 1);
        }
     
		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0.0, 0.0, 0.5, 1);
        }

        .tabs_borderShim {
            display: none;
        }
	`
    });
};