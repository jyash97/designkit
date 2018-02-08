import { css } from 'emotion';
import styled from 'react-emotion';

import base from '../../shared/base';
import font from '../../shared/font';
import { shade, getTextColor, getProperty } from '../../shared/utils';

const transparent = props => css`
	color: ${getProperty(props, 'textDark')};
	border: 1px solid ${shade(getTextColor(props), 0.7)};
	background-color: transparent;

	&:hover, &:focus {
		background-color: transparent;
		color: ${shade(getTextColor(props), -0.1)};
		border-color: ${shade(getTextColor(props), 0.5)};
	}
`;

const primary = props => css`
	color: ${getProperty(props, 'textLight')};
	background-color: ${getProperty(props, 'primaryColor')};

	&:hover, &:focus {
		background-color: ${shade(getProperty(props, 'primaryColor'), -0.1)};
	}
`;

const success = props => css`
	color: ${getProperty(props, 'textLight')};
	background-color: ${getProperty(props, 'successColor')};

	&:hover, &:focus {
		background-color: ${shade(getProperty(props, 'successColor'), -0.1)};
	}
`;

const warning = props => css`
	color: ${getProperty(props, 'textLight')};
	background-color: ${getProperty(props, 'warningColor')};

	&:hover, &:focus {
		background-color: ${shade(getProperty(props, 'warningColor'), -0.1)};
	}
`;

const alert = props => css`
	color: ${getProperty(props, 'textLight')};
	background-color: ${getProperty(props, 'alertColor')};

	&:hover, &:focus {
		background-color: ${shade(getProperty(props, 'alertColor'), -0.1)};
	}
`;

const disabled = css`
	color: #fafafa;
	background-color: #dedede;
	cursor: not-allowed;
`;

const shadow = props => css`
	box-shadow: 0 5px 10px rgba(0,0,0,.1);

	&:hover, &:focus {
		box-shadow: ${props.disabled ? '0 5px 10px rgba(0,0,0,.1)' : '0 5px 10px rgba(0,0,0,.15)'};
	}
`;

const small = css`
	padding: 0 10px;
	height: 28px;
	font-size: 0.88rem;
`;

const big = css`
	padding: 0 20px;
	height: 44px;
	font-size: 1rem;
	line-height: 1rem;
`;

const block = css`
	display: flex;
`;

const Button = styled('a')`
	${base};
	${font};
	font-size: 0.9rem;
	line-height: 0.9rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0 16px;
	height: 40px;
	border-radius: ${props => (props.theme.borderRadius ? props.theme.borderRadius : '4px')};
	cursor: pointer;
	background-color: #f5f5f5;
	user-select: none;
	color: ${props => getTextColor(props)};
	transition: all .3s ease;

	&:hover, &:focus {
		background-color: ${shade('#f5f5f5', -0.1)};
	}

	${props => (props.small ? small : null)}
	${props => (props.big ? big : null)}
	${props => (props.block ? block : null)}
	${props => (props.transparent ? transparent : null)}
	${props => (props.primary ? primary : null)}
	${props => (props.success ? success : null)}
	${props => (props.warning ? warning : null)}
	${props => (props.alert ? alert : null)}
	${props => (props.shadow ? shadow : null)}
	${props => (props.disabled ? disabled : null)}
`;

export default Button;
