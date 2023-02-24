import React from 'react';
import style from './LogoNav.module.css'

function LogoNav(props) {

    return (
        <React.Fragment>
            <div className={style.logo}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                    viewBox="120 180 800 550" enableBackground="new 0 0 1000 1000" space="preserve">
                    <g id="Layer_1" display="none">

                    </g>


                    <g id="Layer_13">
                        <path fill={props.uten} d="M807.206,228.502c0,0-22.545,17.369-37.627,39.766c-15.078,22.396-15.23,54.845-15.23,54.845l-65.348,97.05
		l14.932,10.053l57.883-102.076c0,0,24.984-4.877,40.064-27.273c15.08-22.396,20.258-62.311,20.258-62.311l-27.725,57.284
		l-7.463-5.027l31.768-62.396l-39.234,57.37l-7.465-5.027L807.206,228.502z"/>
                        <path fill={props.uten} d="M816.384,320.337c-21.299,16.594-33.102,60.019-33.102,60.019l-85.195,66.377l11.063,14.199l79.664-73.477
		c0,0,32.361-2.395,60.76-24.52c7.1-5.532,37.064-40.289,26.002-54.488C864.513,294.248,816.384,320.337,816.384,320.337z"/>
                        <g>
                            <path fill={props.uten} d="M703.831,306.336l-1.361,12.6l-7.67,11.93l-2.719,25.22l-8.34,18.23l25.209,2.72l19.41-61.68
			L703.831,306.336z M704.351,360.596c-0.189,1.74-1.75,3-3.49,2.82c-1.74-0.19-3-1.76-2.82-3.5c0.191-1.74,1.76-3,3.5-2.81
			S704.54,358.856,704.351,360.596z M710.56,332.566c-1.738-0.18-3-1.75-2.809-3.49c0.189-1.74,1.75-3,3.49-2.81
			c1.74,0.19,3,1.75,2.809,3.49C713.87,331.496,712.3,332.756,710.56,332.566z"/>
                            <path fill={props.uten} d="M710.13,307.011l18.234,8.345l39.5-129.673c0,0-18.914-2.041-27.26,16.193
			C731.091,222.664,710.13,307.011,710.13,307.011z"/>
                        </g>

                        <ellipse transform="matrix(0.6626 0.749 -0.749 0.6626 537.3186 -508.0029)" fill={props.uten} cx="832.478" cy="342.354" rx="31.5" ry="54" />
                    </g>

                    <g id="Layer_10">
                        <g>
                            <path fill="#85C441" d="M698.001,313.216l-135,36l-17.33,251.26c34.109-7.859,66.49-20.279,96.439-36.59l-7.109-106.67l45-9
			l22.48,74.92c27.398-22.56,51.6-48.86,71.828-78.11L698.001,313.216z M626.001,412.216v-36l27-9l18,36L626.001,412.216z"/>
                            <g>
                                <path fill={props.stroke} d="M697.805,313.693c-5.474,1.666-10.936,3.369-16.42,4.995l-16.746,4.983l-16.763,4.921l-16.782,4.845
				c-11.182,3.257-22.402,6.368-33.602,9.559c-11.199,3.188-22.434,6.247-33.649,9.376l2.417-2.932l-0.944,15.713l-1.01,15.709
				c-0.69,10.471-1.308,20.948-2.058,31.415l-1.115,15.701c-0.355,5.235-0.772,10.466-1.189,15.697l-1.24,15.693l-1.341,15.686
				l-5.531,62.732c-0.449,5.229-0.945,10.453-1.355,15.685l-1.264,15.691c-0.853,10.46-1.552,20.931-2.335,31.396l-1.478-1.262
				l12.505-3.131l12.387-3.568c4.094-1.305,8.163-2.686,12.24-4.034l12.085-4.471c3.987-1.596,7.934-3.291,11.898-4.934
				l11.708-5.354l11.515-5.747l11.304-6.136l-1.162,2.112l-2.245-26.636l-2.206-26.64c-0.724-8.88-1.431-17.761-2.094-26.646
				l-1.998-26.653l-0.238-3.187l3.184-0.659l44.939-9.297l3.518-0.728l1.071,3.484l11.487,37.386l11.283,37.447l-6.818-2.074
				c3.336-2.848,6.661-5.707,10.022-8.525l9.76-8.828l9.45-9.163l9.13-9.485l8.813-9.783l8.504-10.06l8.153-10.352l7.793-10.631
				l-0.152,3.8l-18.623-33.216l-18.496-33.289l-9.188-16.679l-9.133-16.71l-9.104-16.728
				C703.69,324.709,700.759,319.195,697.805,313.693z M698.348,313.016c3.354,5.391,6.732,10.768,10.041,16.185l9.973,16.225
				l9.944,16.242l9.889,16.273l19.658,32.617l19.531,32.689l1.157,1.937l-1.31,1.864l-7.723,10.991l-8.101,10.72l-8.47,10.437
				l-8.858,10.114l-9.22,9.789l-9.555,9.466l-9.879,9.132c-3.388,2.938-6.813,5.835-10.226,8.744l-4.94,4.211l-1.878-6.285
				l-11.197-37.473l-10.992-37.534l4.587,2.756l-45.059,8.703l2.944-3.846l1.557,26.682c0.521,8.894,1,17.791,1.461,26.689
				l1.349,26.695l1.31,26.699l0.073,1.491l-1.235,0.621l-11.62,5.844l-11.803,5.447l-11.976,5.042l-12.125,4.651l-12.251,4.293
				l-12.378,3.896l-12.489,3.521l-12.596,3.11l-1.582,0.391l0.104-1.652c0.66-10.474,1.406-20.941,1.997-31.419l0.903-15.717
				c0.312-5.237,0.537-10.481,0.811-15.723l3.134-62.897l0.825-15.721l0.926-15.715c0.306-5.238,0.61-10.477,0.978-15.711
				l1.051-15.706c0.694-10.471,1.521-20.933,2.275-31.4l1.156-15.698l1.222-15.694l0.184-2.364l2.233-0.568
				c11.284-2.87,22.551-5.812,33.851-8.624c11.301-2.809,22.58-5.698,33.898-8.441l16.968-4.155l16.987-4.079l17.004-4.017
				c5.666-1.345,11.354-2.609,17.03-3.915l0.292-0.067L698.348,313.016z"/>
                                <path fill={props.stroke} d="M625.601,412.216c-0.389-1.5-0.677-3-0.966-4.5c-0.241-1.5-0.522-3-0.719-4.5c-0.421-3-0.731-6-0.969-9
				c-0.121-1.5-0.214-3-0.294-4.5c-0.081-1.5-0.134-3-0.184-4.5c-0.026-1.5-0.084-3-0.068-4.5c-0.001-1.5,0.057-3,0.144-4.5
				l0.156-2.692l2.207-0.586c2.297-0.61,4.627-1.119,6.979-1.564c2.344-0.469,4.711-0.866,7.04-1.379
				c2.345-0.466,4.65-1.048,6.927-1.72c1.14-0.332,2.268-0.697,3.391-1.078c1.125-0.377,2.239-0.783,3.353-1.194l0.985-0.364
				l0.563,1.005c0.82,1.465,1.639,2.931,2.537,4.357c0.871,1.439,1.775,2.862,2.701,4.274c1.816,2.842,3.736,5.632,5.479,8.51
				c1.788,2.856,3.392,5.804,5.043,8.729c1.657,2.921,3.261,5.87,4.873,8.813l2.548,4.652l-5.497,1.378
				c-0.929,0.232-1.867,0.412-2.801,0.621c-0.934,0.208-1.871,0.394-2.811,0.574c-1.873,0.384-3.762,0.691-5.646,1.023
				c-3.78,0.598-7.57,1.146-11.381,1.596l-5.727,0.615l-2.877,0.24c-0.96,0.074-1.916,0.171-2.88,0.227
				c-1.928,0.111-3.851,0.246-5.79,0.296c-1.935,0.081-3.881,0.098-5.839,0.059l-0.378-0.007L625.601,412.216z M626.539,411.574
				c1.59-0.688,3.186-1.349,4.795-1.942c1.811-0.7,3.638-1.314,5.46-1.954c0.911-0.32,1.83-0.598,2.745-0.898l2.748-0.885
				l5.522-1.634c3.69-1.051,7.399-2.003,11.119-2.905c1.866-0.418,3.729-0.861,5.604-1.227c0.937-0.195,1.873-0.385,2.815-0.551
				c0.941-0.167,1.878-0.362,2.824-0.504l-2.949,6.03c-1.388-3.056-2.784-6.108-4.127-9.187c-1.349-3.076-2.745-6.127-3.957-9.271
				c-1.257-3.122-2.337-6.332-3.521-9.49c-0.574-1.588-1.17-3.165-1.798-4.726c-0.603-1.574-1.284-3.108-1.964-4.643l1.548,0.641
				c-1.137,0.339-2.272,0.684-3.397,1.056c-1.127,0.369-2.249,0.754-3.359,1.172c-2.224,0.829-4.418,1.747-6.573,2.78
				c-2.171,0.987-4.304,2.09-6.46,3.121c-2.148,1.055-4.318,2.046-6.521,2.936l2.363-3.279c0.087,1.5,0.145,3,0.144,4.5
				c0.016,1.5-0.042,3-0.068,4.5c-0.05,1.5-0.103,3-0.184,4.5c-0.08,1.5-0.173,3-0.294,4.5c-0.237,3-0.548,6-0.969,9
				c-0.196,1.5-0.478,3-0.719,4.5C627.119,409.003,626.85,410.286,626.539,411.574z"/>
                            </g>
                        </g>

                        <g>
                            <polygon fill="#87C540" points="617.001,286.216 662.001,313.216 680.001,232.216 		" />
                            <path fill={props.stroke} d="M617.851,286.141c1.848,0.722,3.67,1.491,5.48,2.275c2,0.917,4.02,1.801,5.996,2.756
			c3.967,1.888,7.877,3.872,11.748,5.919c3.877,2.04,7.695,4.175,11.494,6.344c1.891,1.099,3.791,2.181,5.658,3.318
			c1.873,1.128,3.717,2.306,5.547,3.506l-5.139,2.208c0.9-3.342,1.904-6.66,2.975-9.964c1.041-3.31,2.156-6.604,3.146-9.926
			c0.518-1.656,1.004-3.318,1.471-4.986c0.455-1.669,0.898-3.342,1.309-5.021c0.402-1.681,0.803-3.363,1.158-5.055
			c0.373-1.688,0.711-3.384,1.043-5.081c0.326-1.698,0.633-3.401,0.926-5.107l0.813-5.131l1.463-10.3
			c0.463-3.438,0.99-6.863,1.545-10.281c0.568-3.416,1.227-6.811,1.861-10.212l6.094,3.656l-7.666,6.994
			c-2.572,2.312-5.117,4.656-7.734,6.916c-2.604,2.273-5.242,4.508-7.914,6.704c-2.666,2.202-5.363,4.367-8.078,6.511
			c-2.719,2.142-5.441,4.278-8.215,6.354l-4.148,3.129c-1.379,1.048-2.797,2.049-4.193,3.076c-1.404,1.02-2.797,2.05-4.227,3.04
			c-1.424,0.995-2.832,2.008-4.27,2.987c-1.443,0.972-2.865,1.969-4.328,2.919C620.407,284.521,619.136,285.338,617.851,286.141z
			 M616.739,285.912c1.135-1.333,2.299-2.631,3.471-3.92c1.164-1.3,2.367-2.552,3.547-3.831c1.188-1.271,2.404-2.507,3.605-3.763
			c1.197-1.261,2.428-2.48,3.65-3.71c1.229-1.223,2.436-2.472,3.682-3.674l3.727-3.621c2.475-2.424,5.002-4.789,7.535-7.146
			c2.533-2.356,5.086-4.69,7.67-6.988c2.578-2.305,5.191-4.569,7.836-6.796c2.633-2.24,5.338-4.396,8.018-6.584l8.084-6.506
			l8.889-7.154l-2.795,10.811c-0.867,3.349-1.709,6.704-2.641,10.039c-0.945,3.332-1.918,6.657-2.955,9.968l-3.037,9.95
			l-1.436,4.994c-0.459,1.669-0.902,3.341-1.326,5.018c-0.416,1.678-0.828,3.357-1.207,5.044c-0.395,1.683-0.744,3.376-1.09,5.07
			c-0.34,1.695-0.648,3.397-0.941,5.103c-0.283,1.708-0.549,3.42-0.779,5.14c-0.512,3.428-0.896,6.884-1.355,10.324
			c-0.43,3.446-0.926,6.877-1.525,10.286l-0.803,4.575l-4.334-2.367c-1.92-1.049-3.828-2.122-5.703-3.244
			c-1.883-1.112-3.732-2.28-5.592-3.431c-3.701-2.331-7.383-4.696-11.006-7.156c-3.629-2.453-7.219-4.969-10.752-7.581
			c-1.773-1.294-3.504-2.66-5.254-3.994c-1.727-1.373-3.451-2.747-5.127-4.207l-0.346-0.303L616.739,285.912z"/>
                        </g>
                        <g>
                            <path fill="#87C540" d="M608.001,304.216l-111.07,307.58c-38.95,4.93-78.65,7.45-118.94,7.42h-0.67l59.68-162l-117-63l54-117
			l90,90l45-108L608.001,304.216z"/>
                            <path fill={props.stroke} d="M608.489,304.009l-6.518,19.76l-6.494,19.385c-4.355,12.914-8.734,25.82-13.172,38.705l-6.643,19.332l-6.707,19.309
			c-4.451,12.879-8.971,25.735-13.506,38.584l-6.787,19.279l-6.846,19.259l-13.738,38.499l-6.967,19.216
			c-2.336,6.399-4.623,12.817-6.998,19.203l-7.096,19.168l-7.162,19.145l-0.691,1.851l-1.844,0.18l-14.97,1.457l-14.97,1.397
			l-15.004,0.938l-7.499,0.476c-2.5,0.147-4.997,0.339-7.499,0.452l-15.019,0.476l-7.506,0.237
			c-2.502,0.068-5.003,0.184-7.506,0.213l-15.018,0.026l-15.01,0.079l-2.061,0.011l0.73-1.92c2.557-6.725,5.098-13.454,7.591-20.202
			l7.523-20.227l7.432-20.26l7.394-20.275l7.321-20.301c2.457-6.761,4.823-13.555,7.24-20.331l14.424-40.683l1.032,2.727
			l-58.924-30.712l-29.401-15.469l-29.356-15.553l-3.026-1.603l1.437-3.156l26.692-58.642l13.346-29.321
			c4.433-9.781,8.914-19.54,13.419-29.288l2.561-5.542l4.321,4.315l22.514,22.485c7.523,7.477,14.951,15.049,22.431,22.569
			l22.403,22.597l22.348,22.652l-6.245,1.235l11.466-26.91l11.53-26.883l11.556-26.873l11.629-26.842l1.063-2.454l2.348,1.112
			l24.572,11.642l24.545,11.703l24.514,11.771l12.25,5.896L608.489,304.009z M607.485,304.432l-12.172-5.155l-12.498-5.354
			l-24.986-10.729l-24.957-10.797l-24.928-10.858l3.412-1.341l-10.871,27.158l-10.945,27.127l-10.969,27.117l-11.034,27.09
			l-2.149,5.276l-4.096-4.041l-22.652-22.348l-22.597-22.403c-7.52-7.48-15.092-14.907-22.569-22.431l-22.485-22.514l6.881-1.228
			c-4.495,9.752-9.014,19.494-13.581,29.212l-13.654,29.179l-27.308,58.358l-1.589-4.759l29.144,15.947l29.098,16.031l58.076,32.288
			l1.711,0.952l-0.679,1.775l-15.416,40.317c-2.557,6.724-5.164,13.43-7.68,20.169l-7.6,20.199l-7.526,20.225l-7.488,20.24
			l-7.396,20.273c-2.48,6.752-4.913,13.522-7.33,20.298l-1.331-1.909l14.966-0.353l14.957-0.424
			c2.491-0.104,4.979-0.295,7.469-0.438l7.466-0.463l14.928-0.925c2.485-0.188,4.965-0.453,7.448-0.676l7.444-0.698l14.882-1.409
			l29.66-3.703l-2.537,2.03l6.723-19.304l6.789-19.278c2.252-6.431,4.592-12.829,6.885-19.245l6.918-19.232l14.027-38.395
			l7.039-19.189l7.096-19.168c4.723-12.782,9.459-25.559,14.264-38.311l7.176-19.139l7.24-19.116
			c4.818-12.747,9.697-25.473,14.596-38.19l7.391-19.062L607.485,304.432z"/>
                        </g>
                        <g>
                            <path fill="#85C441" d="M374.331,514.546l-0.33,86.67l-116.69,10.15c-31.03-4.04-61.57-9.601-91.56-16.62l-2.42-47.53l51-9.33
			L194,412.216l-63,18l-9-72l207-72l14.35,57.41l-8.62,18.68L266,385.216l18.33,138.33L374.331,514.546z"/>
                            <path fill={props.stroke} d="M374.72,514.115l0.517,22.102l0.406,21.67l0.347,21.669l0.263,21.669l0.024,2.018l-2.082,0.218
			c-9.709,1.015-19.423,1.989-29.138,2.94l-29.143,2.88l-29.152,2.767c-9.718,0.915-19.434,1.865-29.156,2.728l-0.382,0.034
			l-0.356-0.05l-23.137-3.222l-23.051-3.799l-11.466-2.234l-11.463-2.25c-7.603-1.686-15.208-3.366-22.793-5.123l-2.567-0.595
			l-0.112-2.613l-1.024-23.774l-0.906-23.78l-0.102-2.663l2.546-0.426l51.141-8.561l-1.778,2.519l-4.619-31.492
			c-1.511-10.502-3.162-20.981-4.749-31.472c-1.572-10.492-3.281-20.962-4.931-31.442l-2.506-15.714l-2.577-15.703l1.566,0.995
			l-15.74,4.536l-15.721,4.602l-15.72,4.606l-15.697,4.686l-1.866,0.557l-0.271-1.97l-9.909-71.886l-0.283-2.051l2.01-0.73
			l25.752-9.354l25.777-9.282l51.621-18.372l103.315-36.532l4.365-1.543l1.133,4.515l14.4,57.397l0.369,1.471l-0.636,1.364
			l-8.688,18.648l-0.776,1.666l-1.715,0.564l-34.413,11.31l-17.211,5.64l-17.228,5.593l2.581-4.129l4.313,34.618l4.21,34.632
			l4.155,34.639l4.079,34.649l-2.44-1.932l22.538-1.877l22.545-1.799l22.546-1.788L374.72,514.115z M373.917,515l-21.992,2.735
			l-22.454,2.712l-22.455,2.701l-22.463,2.623l-2.119,0.248l-0.321-2.18l-5.086-34.516l-5.01-34.526l-4.954-34.533l-4.853-34.546
			l-0.435-3.098l3.016-1.032l17.138-5.862l17.153-5.815l34.316-11.6l-2.491,2.23l8.552-18.711l-0.266,2.834l-14.3-57.422
			l5.498,2.971l-103.685,35.468l-51.879,17.628l-25.973,8.718l-25.998,8.646l1.728-2.781l8.091,72.113l-2.137-1.413l15.803-4.314
			l15.78-4.394l15.779-4.398l15.76-4.464l1.347-0.382l0.22,1.377l2.506,15.714l2.576,15.703c1.739,10.465,3.418,20.94,5.234,31.393
			c1.802,10.455,3.539,20.92,5.417,31.363l5.546,31.342l0.37,2.093l-2.148,0.427l-50.859,10.1l2.444-3.088l1.514,23.749
			l1.396,23.756l-2.679-3.208c7.565,1.587,15.109,3.262,22.659,4.908l22.762,4.4l22.848,3.938l22.941,3.366l-0.738-0.016
			c9.726-0.829,19.459-1.571,29.189-2.348l29.192-2.309l29.202-2.195c9.733-0.74,19.469-1.457,29.208-2.135l-2.057,2.235
			l0.428-21.666l0.512-21.666l0.571-21.666L373.917,515z"/>
                        </g>
                    </g>
                    <g id="Layer_15_copy" display="none">
                        <g display="inline">
                            <path fill={props.stroke} d="M762.245,529.91c-7.659,8.784-15.985,16.934-24.559,24.817c-8.612,7.839-17.52,15.367-26.731,22.515
			c-9.217,7.139-18.665,13.997-28.411,20.421c-9.732,6.443-19.719,12.512-29.911,18.228c-10.223,5.66-20.666,10.932-31.309,15.787
			c-10.644,4.85-21.493,9.269-32.538,13.151c-11.03,3.927-22.243,7.349-33.585,10.289c-11.347,2.924-22.854,5.217-34.425,7.066
			c-2.95,0.481-5.771,0.822-8.663,1.236c-2.873,0.399-5.744,0.804-8.657,1.134l-8.707,1.047l-8.702,0.898
			c-11.611,1.086-23.239,1.975-34.884,2.456c-11.642,0.521-23.291,0.792-34.936,0.769c-11.644-0.013-23.284-0.252-34.908-0.777
			c-11.623-0.566-23.237-1.198-34.826-2.175c-11.59-0.947-23.168-2.031-34.712-3.412c-11.546-1.358-23.076-2.854-34.566-4.62
			c-11.492-1.707-22.97-3.667-34.399-5.438l-0.815-0.126l-0.328-0.771c-0.645-1.517-1.35-3.033-2.055-4.533
			c-0.718-1.494-1.445-2.986-2.222-4.428c-0.385-0.726-0.777-1.44-1.194-2.117l-0.307-0.517l-0.077-0.129l-0.019-0.032l-0.01-0.017
			c0.015,0.022-0.039-0.062,0.031,0.048l-0.005-0.008l-0.045-0.064l-0.179-0.259c-0.238-0.329-0.479-0.723-0.714-1l-0.697-0.859
			l-0.797-0.872c-0.549-0.57-1.106-1.139-1.706-1.675c-2.366-2.176-5.026-4.11-7.756-5.94c-2.746-1.817-5.586-3.516-8.479-5.148
			l-10.607-5.984l12.007,2.317c12.051,2.325,24.145,4.454,36.259,6.005c6.069,0.725,12.209,1.487,18.3,2.155
			c6.099,0.64,12.184,1.342,18.297,1.879l9.157,0.882l9.166,0.753c6.107,0.55,12.229,0.863,18.338,1.327
			c12.232,0.735,24.47,1.316,36.715,1.557c12.242,0.333,24.491,0.251,36.733,0.055c12.242-0.323,24.482-0.749,36.708-1.557
			c12.229-0.713,24.441-1.758,36.645-2.892l18.299-1.813l4.544-0.508l4.503-0.567c3.012-0.398,6.02-0.836,9.023-1.314
			c12.02-1.893,23.958-4.386,35.821-7.19c11.856-2.847,23.612-6.138,35.231-9.854c11.614-3.735,23.11-7.844,34.438-12.38
			c11.323-4.543,22.469-9.531,33.386-14.976c10.929-5.419,21.634-11.298,32.02-17.698c10.374-6.415,20.482-13.271,30.161-20.704
			c9.672-7.436,18.96-15.387,27.693-23.924c2.18-2.137,4.338-4.298,6.442-6.511l1.561-1.634l1.551-1.708
			c1.023-1.142,2.104-2.26,3.067-3.42c4.005-4.541,7.806-9.391,11.567-14.217l6.823-8.753l-4.51,10.068
			c-1.258,2.808-2.447,5.641-3.4,8.519c-0.226,0.72-0.463,1.44-0.64,2.167c-0.197,0.721-0.35,1.459-0.481,2.173l-0.38,2.294
			l-0.277,2.25l-0.174,2.275c-0.014,0.759-0.075,1.521-0.052,2.278c0.002,0.76,0.009,1.52,0.067,2.275
			c0.027,0.76,0.134,1.51,0.213,2.265c0.117,0.748,0.232,1.498,0.403,2.237c0.162,0.74,0.356,1.475,0.588,2.198
			c0.445,1.458,1.064,2.848,1.666,4.306l0.096,0.233L762.245,529.91z M761.464,529.56c-0.633-1.296-1.312-2.628-1.831-4.024
			c-0.286-0.737-0.535-1.491-0.75-2.254c-0.226-0.762-0.393-1.536-0.563-2.313c-0.131-0.781-0.288-1.563-0.364-2.351
			c-0.108-0.786-0.164-1.576-0.212-2.367c-0.062-0.791-0.038-1.581-0.061-2.373l0.065-2.37l0.179-2.38l0.269-2.313
			c0.109-0.816,0.243-1.604,0.42-2.388c0.158-0.789,0.374-1.553,0.579-2.322c0.871-3.053,1.966-5.997,3.121-8.901l2.313,1.314
			c-3.593,5.031-7.174,10.03-11.106,14.889c-0.955,1.244-1.96,2.39-2.949,3.571l-1.492,1.76l-1.566,1.758
			c-2.057,2.315-4.169,4.581-6.307,6.823c-8.551,8.972-17.718,17.358-27.349,25.17c-9.627,7.816-19.676,15.12-30.097,21.848
			c-10.413,6.74-21.16,12.957-32.146,18.712c-11.002,5.725-22.252,10.967-33.684,15.771c-11.43,4.81-23.051,9.162-34.834,13.028
			c-11.778,3.881-23.699,7.33-35.739,10.331c-12.038,3.012-24.217,5.483-36.501,7.41c-3.07,0.484-6.149,0.928-9.235,1.333
			c-1.539,0.204-3.09,0.396-4.649,0.579l-4.625,0.511c-6.143,0.583-12.276,1.26-18.427,1.765
			c-12.303,1.013-24.616,1.935-36.955,2.522c-12.332,0.685-24.687,0.984-37.039,1.179c-12.355,0.068-24.714,0.02-37.061-0.446
			c-12.35-0.355-24.679-1.183-36.991-2.094c-6.149-0.541-12.304-1.02-18.437-1.703l-9.205-0.963l-9.188-1.091
			c-6.125-0.707-12.238-1.591-18.353-2.405c-6.116-0.846-12.161-1.77-18.283-2.676c-12.243-1.928-24.328-4.401-36.375-7.016
			l1.4-3.667c2.908,1.735,5.785,3.551,8.586,5.506c2.791,1.973,5.527,4.059,8.044,6.486c0.635,0.598,1.24,1.241,1.836,1.894
			l0.875,1.007l0.857,1.118c0.29,0.377,0.477,0.708,0.721,1.064l0.172,0.263l0.043,0.066l0.057,0.091l0.02,0.036l0.08,0.143
			l0.32,0.574c0.441,0.765,0.833,1.531,1.212,2.299c0.771,1.533,1.47,3.078,2.161,4.627c0.679,1.555,1.337,3.103,1.987,4.68
			l-1.142-0.896c11.493,1.92,22.865,4.098,34.333,5.862c11.456,1.787,22.937,3.416,34.458,4.707
			c11.521,1.275,23.064,2.377,34.631,3.12c11.567,0.716,23.145,1.281,34.73,1.426c11.584,0.173,23.168,0.061,34.739-0.277
			c11.572-0.316,23.13-0.964,34.663-1.854c5.769-0.419,11.526-0.958,17.283-1.484c2.878-0.269,5.749-0.606,8.624-0.905
			c2.875-0.297,5.747-0.618,8.612-0.992l8.604-1.035l8.566-1.168c2.85-0.368,5.72-0.819,8.589-1.266l8.562-1.327
			c11.35-1.841,22.623-4.165,33.766-7.02c11.155-2.803,22.195-6.081,33.068-9.86c5.443-1.869,10.84-3.88,16.197-5.988
			c5.371-2.077,10.683-4.307,15.971-6.592c5.28-2.304,10.51-4.729,15.705-7.226c5.184-2.521,10.319-5.142,15.419-7.837
			c10.195-5.395,20.21-11.148,29.992-17.285c9.789-6.127,19.407-12.546,28.761-19.343c9.357-6.792,18.537-13.848,27.404-21.292
			c4.452-3.699,8.832-7.491,13.123-11.381C753.298,537.529,757.486,533.638,761.464,529.56z"/>
                        </g>
                        <g display="inline">
                            <path fill={props.stroke} d="M789.725,421.806c0.924,1.326,1.839,2.66,2.73,4.026c0.447,0.68,0.868,1.377,1.305,2.065
			c0.427,0.693,0.825,1.407,1.239,2.111c0.397,0.714,0.771,1.441,1.159,2.163l1.065,2.215l0.968,2.26l0.879,2.294l0.136,0.353
			l-0.217,0.373c-7.56,12.991-15.219,25.935-23.285,38.652c-4.024,6.364-8.151,12.673-12.494,18.855
			c-4.347,6.181-8.854,12.271-13.903,18.044c-10.057,11.347-21.123,21.772-32.807,31.424c-11.701,9.639-24.113,18.392-36.97,26.4
			c-12.874,7.982-26.173,15.283-39.859,21.757c-13.669,6.512-27.661,12.323-41.882,17.497c-14.223,5.176-28.715,9.583-43.358,13.396
			c-14.655,3.772-29.505,6.795-44.488,9.037c-7.482,1.082-15.07,1.945-22.566,2.545l-11.225,0.99l-11.281,0.816
			c-15.037,1.024-30.073,1.833-45.134,2.18c-15.055,0.374-30.12,0.446-45.169-0.003c-15.049-0.36-30.087-1.06-45.092-2.169
			c-15.009-1.065-29.983-2.525-44.932-4.182c-7.467-0.884-14.942-1.715-22.393-2.73c-3.732-0.511-7.445-0.933-11.192-1.516
			c-3.715-0.573-7.431-1.066-11.145-1.705l-11.142-1.949l-11.082-2.141c-7.372-1.496-14.756-2.943-22.103-4.552
			c-14.709-3.146-29.371-6.503-43.996-10.01l-0.721-0.173l-0.473-0.623c-1.028-1.357-2.027-2.765-2.938-4.276
			c-0.458-0.75-0.89-1.534-1.28-2.347c-0.4-0.807-0.748-1.652-1.056-2.512c-0.309-0.861-0.553-1.743-0.766-2.629
			c-0.193-0.887-0.352-1.775-0.464-2.659c-0.225-1.767-0.303-3.503-0.331-5.208l-0.049-3.088l3.084,0.758l12.861,3.159
			c4.292,1.03,8.603,1.978,12.902,2.97c8.616,1.907,17.253,3.712,25.918,5.362c4.323,0.876,8.667,1.638,13.009,2.403l6.512,1.153
			l6.531,1.043l6.529,1.047c2.177,0.346,4.362,0.641,6.542,0.964c4.363,0.628,8.72,1.293,13.098,1.817
			c8.738,1.164,17.503,2.117,26.27,3.028l13.165,1.229l13.183,1.032l13.199,0.82c4.401,0.251,8.807,0.422,13.21,0.637
			c4.402,0.229,8.813,0.302,13.219,0.46c4.406,0.165,8.816,0.216,13.225,0.292l6.614,0.111l6.616,0.021l6.616,0.02l1.654,0.006
			l1.611-0.014l3.319-0.049c8.849-0.139,17.725-0.197,26.485-0.608c4.385-0.185,8.806-0.287,13.162-0.491l6.63-0.342l6.57-0.42
			c8.758-0.59,17.548-1.327,26.308-2.228c8.767-0.862,17.518-1.92,26.266-3.006c8.751-1.07,17.484-2.308,26.211-3.589
			c8.726-1.297,17.435-2.712,26.134-4.186c8.696-1.494,17.374-3.095,26.046-4.731l-0.424,0.108l8.691-2.777
			c1.446-0.469,2.901-0.912,4.341-1.401l4.312-1.488c2.869-1.007,5.763-1.949,8.611-3.01l8.55-3.179
			c2.854-1.05,5.653-2.232,8.483-3.343l4.235-1.691l4.191-1.791c2.785-1.214,5.606-2.353,8.364-3.629l8.298-3.775
			c5.473-2.638,10.96-5.257,16.325-8.108l4.044-2.104l3.988-2.203c2.657-1.471,5.333-2.914,7.934-4.482
			c5.269-3.029,10.416-6.256,15.545-9.513l7.599-5.03l7.463-5.229l7.314-5.438l7.161-5.637l6.999-5.839l6.834-6.034
			c2.211-2.083,4.458-4.133,6.644-6.245c2.143-2.154,4.354-4.245,6.443-6.454c2.081-2.215,4.233-4.369,6.232-6.66l3.048-3.396
			c1.014-1.134,1.978-2.311,2.971-3.462c0.98-1.163,1.987-2.306,2.947-3.486l2.856-3.561c1.94-2.348,3.705-4.829,5.562-7.245
			c1.788-2.463,3.563-4.941,5.283-7.455c1.683-2.54,3.415-5.05,4.999-7.655c3.284-5.139,6.262-10.467,9.142-15.849
			c2.857-5.396,5.473-10.919,7.919-16.524l0.291-0.666L789.725,421.806z M789.462,422.911c-2.13,5.472-4.414,10.89-6.941,16.203
			c-2.693,5.522-5.52,10.993-8.647,16.292c-1.507,2.685-3.166,5.277-4.776,7.901c-1.649,2.598-3.354,5.164-5.076,7.717
			c-1.789,2.505-3.49,5.079-5.368,7.522l-2.767,3.704c-0.93,1.229-1.907,2.42-2.859,3.633c-0.966,1.201-1.898,2.431-2.896,3.605
			l-2.991,3.527c-1.963,2.38-4.08,4.623-6.129,6.93c-2.058,2.299-4.237,4.482-6.353,6.729c-2.156,2.206-4.377,4.349-6.563,6.527
			l-6.768,6.318l-6.97,6.095l-7.142,5.895l-7.303,5.696l-7.458,5.489l-7.602,5.29c-5.125,3.442-10.314,6.791-15.604,9.974
			c-2.615,1.643-5.304,3.158-7.977,4.702l-4.013,2.313l-4.066,2.211c-5.399,2.996-10.919,5.758-16.431,8.538l-8.354,3.986
			c-2.782,1.337-5.628,2.527-8.44,3.798l-4.231,1.875l-4.273,1.772c-2.856,1.164-5.685,2.402-8.564,3.506l-8.629,3.339
			c-2.877,1.113-5.795,2.107-8.691,3.168l-4.353,1.566c-1.453,0.516-2.921,0.984-4.381,1.479l-8.773,2.931l-0.17,0.057l-0.254,0.052
			c-17.411,3.509-34.899,6.625-52.453,9.377c-8.78,1.354-17.569,2.662-26.384,3.805c-8.812,1.169-17.647,2.166-26.5,3.046
			c-8.854,0.9-17.709,1.635-26.616,2.226l-6.682,0.419l-6.631,0.335c-4.486,0.21-8.917,0.309-13.377,0.442
			c-8.931,0.339-17.762,0.318-26.616,0.38l-3.32,0.021l-1.708-0.001l-1.666-0.021l-6.663-0.08l-6.662-0.081l-6.662-0.173
			c-4.441-0.117-8.882-0.208-13.322-0.414c-4.439-0.199-8.881-0.313-13.317-0.584c-4.437-0.256-8.875-0.469-13.31-0.762
			l-13.299-0.947l-13.283-1.16l-13.265-1.359c-8.835-0.982-17.657-2.091-26.454-3.369c-4.406-0.586-8.792-1.313-13.182-2.003
			c-2.193-0.354-4.392-0.68-6.582-1.058l-6.563-1.171l-6.561-1.176l-6.54-1.286c-4.36-0.854-8.721-1.703-13.058-2.668
			c-8.696-1.823-17.339-3.883-25.963-5.997c-4.301-1.103-8.614-2.159-12.904-3.299l-12.851-3.485l3.034-2.33
			c-0.021,1.594,0.008,3.162,0.156,4.675c0.073,0.756,0.186,1.495,0.32,2.226c0.154,0.724,0.328,1.439,0.557,2.14
			c0.891,2.799,2.533,5.452,4.401,8.046l-1.193-0.796c14.523,3.792,29.086,7.436,43.695,10.869
			c14.599,3.432,29.286,6.668,44.012,9.266c3.682,0.677,7.409,1.215,11.112,1.828c3.673,0.586,7.424,1.029,11.133,1.551
			c7.433,1.042,14.889,1.899,22.337,2.81c14.909,1.724,29.865,2.995,44.832,4.012l11.233,0.639l11.242,0.437
			c3.746,0.17,7.496,0.213,11.244,0.297c3.748,0.077,7.496,0.178,11.246,0.148c14.996,0.073,29.987-0.375,44.957-1.121
			c14.97-0.71,29.924-1.903,44.833-3.328l11.173-1.106l11.201-1.233c7.466-0.762,14.794-1.759,22.158-2.985
			c14.706-2.393,29.283-5.633,43.706-9.429c14.434-3.765,28.674-8.254,42.727-13.247c14.048-5.013,27.871-10.654,41.37-16.983
			c13.495-6.333,26.699-13.286,39.46-20.98c12.755-7.702,25.031-16.182,36.743-25.38c11.688-9.229,22.698-19.313,32.892-30.172
			c4.992-5.407,9.605-11.287,14.061-17.275c4.443-6.005,8.741-12.141,12.969-18.33c4.222-6.194,8.351-12.459,12.445-18.75
			c4.107-6.283,8.166-12.602,12.205-18.936l-0.081,0.725l-0.75-2.275l-0.836-2.243l-0.934-2.206
			c-0.344-0.721-0.675-1.449-1.03-2.166c-0.373-0.708-0.729-1.426-1.116-2.129c-0.396-0.698-0.779-1.405-1.188-2.097
			C790.896,425.215,790.181,424.063,789.462,422.911z"/>
                        </g>
                    </g>

                    <g id="Layer_11_copy_3">
                        <g>
                            <path fill={props.theme} d="M641.394,662.688c-3.025,4.427-6.731,8.896-11.112,13.405c-2.877,2.94-5.754,5.538-8.63,7.796
			c-2.878,2.254-5.144,3.538-6.8,3.849c-0.828,0.156-1.596,0.063-2.302-0.274c-0.707-0.34-1.146-0.964-1.316-1.874
			c-0.25-1.326,0.033-2.56,0.849-3.696c0.814-1.138,1.994-2.153,3.542-3.045c0.765-0.486,1.863-1.035,3.291-1.647
			c1.843-0.688,3.439-1.546,4.79-2.572c2.549-1.936,5.433-4.728,8.649-8.377c3.214-3.646,5.68-6.833,7.398-9.557
			c2.844-4.477,4.923-8.362,6.233-11.653c1.311-3.287,1.671-6.507,1.079-9.654c-0.327-1.739-1.393-2.844-3.196-3.321
			c-1.805-0.475-3.907-0.487-6.309-0.036c-6.129,1.151-11.516,3.279-16.161,6.381c-2.05,1.413-3.45,2.406-4.199,2.975
			c-2.732,1.886-4.981,3.381-6.746,4.484c-1.998,1.232-3.931,2.347-5.802,3.341c-1.87,0.994-3.114,1.679-3.729,2.051l1.136,4.674
			c0.233,1.241,0.669,3.218,1.307,5.927c0.638,2.71,1.183,5.267,1.634,7.667c1.073,5.714,1.53,10.431,1.372,14.145
			c-0.113,1.222-0.33,2.119-0.65,2.695c-0.322,0.575-1.062,0.97-2.22,1.188c-0.746,0.14-1.497,0.025-2.252-0.348
			c-0.757-0.373-1.204-0.931-1.345-1.677c-0.046-0.248,0.063-1.725,0.325-4.434c0.263-2.705,0.207-5.054-0.167-7.042
			c-1.213-6.459-3.053-14.643-5.515-24.555l-1.446-5.645c-1.524-5.371-2.582-9.629-3.173-12.776
			c-0.452-2.401-0.858-5.477-1.22-9.225c-0.361-3.745-0.568-6.214-0.62-7.405c-2.992,1.42-6.728,3.665-11.208,6.735
			c-1.301,0.846-2.926,2.222-4.882,4.133c-1.822,1.715-3.104,2.641-3.85,2.78c-0.662,0.125-1.297-0.056-1.902-0.542
			c-0.606-0.484-0.987-1.143-1.143-1.973c-0.296-1.571,2.099-4.123,7.179-7.648c5.08-3.528,10.713-6.857,16.897-9.992
			c5.552-2.845,10.528-5.107,14.927-6.793c4.398-1.682,9-2.977,13.803-3.88c4.389-0.825,8.213-0.663,11.473,0.479
			c3.257,1.146,5.176,3.252,5.751,6.314c1.37,7.288-1.188,15.57-7.675,24.849c3.466-1.166,6.648-2.022,9.549-2.567
			c3.807-0.716,7.228-0.543,10.256,0.516c3.028,1.062,4.893,3.453,5.594,7.18c0.747,3.976,0.048,8.243-2.096,12.803
			C648.618,651.406,645.495,656.688,641.394,662.688z M617.897,602.674c-3.396,0.639-7.587,1.834-12.572,3.585
			c-4.987,1.753-8.803,3.349-11.445,4.788c-0.352,5.897-0.166,10.749,0.549,14.557c1.013,5.384,2.537,12.126,4.574,20.23
			c0.812-0.236,2.096-0.821,3.851-1.752c1.754-0.928,3.355-1.873,4.805-2.832c7.243-4.789,12.977-10.326,17.197-16.607
			c4.222-6.279,5.803-12.234,4.744-17.867c-0.374-1.987-1.61-3.317-3.709-3.996C623.79,602.103,621.128,602.067,617.897,602.674z"/>
                        </g>
                        <g>
                            <path fill={props.theme} d="M716.484,621.345c-1.349,1.013-3.641,0.521-6.878-1.473c-3.237-1.993-6.13-4.404-8.677-7.233
			c-2.445-2.693-7.052-8.401-13.818-17.126c-1.131-1.362-2.238-2.769-3.327-4.218c-1.089-1.448-2.048-2.651-2.872-3.611
			c1.537,6.116,2.852,13.404,3.938,21.86c1.087,8.461,1.522,16.089,1.312,22.889c-0.213,6.8-1.397,11.01-3.552,12.63
			c-2.223,1.67-4.573,1.594-7.053-0.233c-2.479-1.826-5.643-5.299-9.489-10.419c-3.594-4.781-7.047-10.672-10.355-17.671
			c-3.311-6.999-5.345-12.688-6.108-17.069c-0.391-1.921-0.539-3.311-0.447-4.171c0.092-0.859,0.442-1.518,1.048-1.973
			c1.684-1.265,2.78-1.561,3.286-0.888c0.254,0.338,0.497,1.365,0.735,3.083c0.713,4.735,2.167,9.967,4.362,15.693
			c2.195,5.729,6.282,12.566,12.254,20.515c4,5.321,6.739,7.425,8.222,6.311c1.751-1.315,2.671-5.035,2.757-11.162
			c0.087-6.125-0.412-12.995-1.498-20.612c-1.086-7.616-2.348-13.992-3.784-19.133c-0.474-1.751-1.438-4.296-2.889-7.631
			c-0.658-1.297-1.077-2.273-1.255-2.932c-0.178-0.656-0.132-1.086,0.138-1.289c0.741-0.557,1.777-0.86,3.108-0.913
			c1.33-0.05,2.252,0.261,2.756,0.933c2.431,3.233,6.712,8.688,12.845,16.355c6.133,7.672,10.505,12.896,13.122,15.673
			c2.242,2.426,4.276,4.113,6.097,5.063c1.821,0.951,3.384,1.595,4.69,1.93c1.306,0.337,2.035,0.604,2.188,0.806
			c0.81,1.078,1.139,2.148,0.988,3.21C718.176,619.6,717.561,620.535,716.484,621.345z"/>
                        </g>
                        <g>
                            <path fill={props.theme} d="M737.543,546.134c-0.514,0.438-1.322,0.659-2.428,0.661c-1.105,0.004-1.788,0.115-2.043,0.333
			c-1.729,1.478-3.472,5.018-5.226,10.616c-1.755,5.601-3.248,11.698-4.483,18.294c-1.234,6.599-1.95,11.92-2.149,15.968
			l1.575,1.648c6.783-1.918,14.25-4.142,22.396-6.671c8.147-2.527,13.566-4.553,16.255-6.076c1.006-0.637,1.985-1.306,2.937-2.011
			c0.951-0.701,1.619-1.217,2.004-1.545c0.576-0.493,1.085-0.871,1.523-1.137c0.439-0.264,0.74-0.3,0.905-0.107
			c0.656,0.769,0.72,2.044,0.192,3.824c-0.529,1.783-1.979,3.687-4.348,5.711c-2.113,1.806-5.65,3.474-10.611,4.994
			c-4.96,1.524-11.001,3.113-18.123,4.764l-8.599,2.194c7.784,7.425,12.032,11.551,12.744,12.385
			c0.602,0.704,0.741,1.582,0.421,2.633c-0.323,1.05-0.899,1.932-1.731,2.643c-0.514,0.438-1.586,0.026-3.22-1.238
			c-1.635-1.263-4.619-3.977-8.953-8.143l-5.682-5.287c-1.042,0.337-2.11,0.448-3.207,0.332s-1.864-0.43-2.302-0.942
			c-0.657-0.77-0.784-2.213-0.378-4.333c-3.021-3.403-7.41-8.187-13.173-14.347c-5.762-6.157-9.967-10.656-12.612-13.494
			l-11.894-12.946c-1.532-1.792-2.622-3.521-3.269-5.187c-0.646-1.663-0.201-3.152,1.337-4.467c0.576-0.492,1.057-0.708,1.44-0.649
			c0.384,0.062,0.85,0.411,1.396,1.051c2.518,2.947,8.569,9.609,18.154,19.981c9.585,10.374,16.448,17.725,20.592,22.055
			c2.68-25.786,7.318-41.5,13.917-47.139c1.346-1.149,2.688-1.879,4.027-2.193c1.338-0.313,2.228-0.213,2.666,0.299
			c0.767,0.898,1.141,2.212,1.124,3.943C738.705,544.283,738.312,545.477,737.543,546.134z"/>
                        </g>
                        <g>
                            <path fill={props.theme} d="M802.338,532.27c0.844,0.558,1.579,1.549,2.204,2.97c0.624,1.423,0.705,2.487,0.241,3.189
			c-0.79,1.197-2.131,1.622-4.025,1.279c-1.895-0.342-3.825-1.163-5.795-2.464c-1.688-1.114-6.68-4.563-14.978-10.347l-3.938-2.752
			c-1.616-1.068-3.054-1.412-4.314-1.033c3.254,6.693,5.944,12.711,8.069,18.053c2.128,5.344,3.536,11.272,4.23,17.79
			c0.694,6.517-0.491,12.096-3.556,16.735c-1.487,2.251-3.34,3.527-5.558,3.828c-2.218,0.302-4.452-0.29-6.703-1.776
			c-2.811-1.856-5.824-5.665-9.04-11.424c-3.215-5.759-6.036-12.266-8.462-19.524c-2.427-7.256-3.957-13.921-4.592-19.996
			c-0.391-3.993-0.444-7.008-0.161-9.043c0.283-2.033,0.819-3.648,1.609-4.845c0.742-1.124,1.861-2.051,3.354-2.783
			c1.493-0.73,3.15-1.101,4.973-1.108c1.823-0.008,3.543,0.522,5.159,1.59c2.181,1.44,3.861,3.408,5.039,5.902l0.656-2.141
			c0.511-0.772,1.762-0.603,3.753,0.509c1.172,0.675,3.515,2.096,7.03,4.265c3.515,2.17,6.42,3.964,8.716,5.378
			c2.365,1.464,4.664,2.88,6.889,4.247c2.227,1.371,3.995,2.438,5.307,3.202c0.539,0.257,1.234,0.311,2.088,0.166
			C801.385,531.994,801.987,532.038,802.338,532.27z M766.644,521.872c-1.552-2.236-3.558-4.167-6.02-5.793
			c-1.477-0.976-3.049-1.382-4.721-1.225c-1.67,0.161-2.993,0.977-3.968,2.453c-1.161,1.759-1.451,4.798-0.871,9.118
			c0.583,4.93,1.944,10.626,4.087,17.09c2.143,6.465,4.628,12.296,7.454,17.494c2.828,5.2,5.506,8.635,8.037,10.307
			c2.108,1.393,3.814,1.106,5.114-0.863c2.508-3.796,3.516-8.38,3.025-13.754c-0.49-5.372-1.771-10.736-3.838-16.091
			C772.876,535.254,770.109,529.008,766.644,521.872z"/>
                        </g>
                        <g>
                            <circle fill={props.theme} cx="802.182" cy="508.344" r="6.262" />
                        </g>
                    </g>

                </svg>
            </div>
        </React.Fragment>
    )
}

export default LogoNav