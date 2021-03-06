import React from 'react';
import styled, { css } from 'react-emotion';
import { string, bool, node, oneOfType } from 'prop-types';

const Wrapper = styled('div')`
	position: relative;
	display: flex;
	min-height: 360px;
	flex-direction: column;
	border-radius: 2px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	overflow: hidden;
`;

const Image = styled('div')`
	width: 100%;
	height: ${props => (props.big ? '160px' : '120px')};
	background-image: url(${props => props.src});
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
`;

const Card = styled('div')`
	height: auto;
	padding: 10px 20px 25px 20px;
	background-color: #fff;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;

	h4 {
		color: #424242;
		margin: 0 0 10px;
	}

	p {
		font-size: 14px;
		width: 100%;
		max-width: 200px;
	}
`;

const primaryColor = ({ theme }) =>
	css({
		color: theme.primaryColor,
	});

const smallFont = css({
	fontSize: '0.875rem',
});

const grayColor = css({
	color: '#545761',
	margin: '0 auto',
	'a, a:visited, a:hover': {
		color: '#545761',
	},
});

const Title = styled('h3')(primaryColor, {
	fontSize: '1rem',
});

const Description = styled('p')(grayColor, smallFont, {
	marginBottom: 40,
});

const Footer = styled('p')(grayColor, smallFont, {});

const Link = styled('a')(primaryColor, smallFont, {
	textDecoration: 'none',
	fontWeight: 600,
});

const ImageCard = ({
	src,
	big,
	title,
	description,
	footer,
	link,
	linkText,
}) => (
	<Wrapper>
		<Image src={src} big={big} />
		<Card>
			<Title>{title}</Title>
			<Description>{description}</Description>
			<Footer>{footer}</Footer>
			<Link href={link} target="_blank" rel="noreferrer noopener">
				{linkText}
			</Link>
		</Card>
	</Wrapper>
);

ImageCard.defaultProps = {
	linkText: 'READ MORE',
};

ImageCard.propTypes = {
	src: string,
	title: string,
	description: string,
	footer: oneOfType([string, node]),
	link: string,
	big: bool,
	children: node,
	linkText: string,
};

export default ImageCard;
