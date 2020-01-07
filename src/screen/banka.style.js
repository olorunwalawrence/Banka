import styled from 'styled-components';

export const screenContainer = styled.div``;

export const wrapper = styled.div`
	position: sticky;
	top: 0px;
`;

export const BannerTextWrapper = styled.div`
	position: absolute;
	color: white;
	top: 25%;
	width: 40%;
	height: auto;
	left: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const bannertextHeader = styled.h2`
	text-transform: capitalize;
	text-align: center;
	margin: 5px;
`;
export const bannerText = styled.p`
	padding-bottom: 20px;
	text-align: center;
`;

export const BannerTextTiite = styled.h1`
	margin: 5px;
`;

export const bannerButton = styled.div`
	width: 150px;
	height: 50px;
	border-radius: 5px;
	padding-top: 10px;
	text-align: center;
	background: linear-gradient(0deg, #f3c400 0%, #f88845 100%);
`;
