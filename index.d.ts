declare module 'placeholder-image-box' {
	import { Component } from 'react';
	import { ViewStyle } from 'react-native';

	interface BoxImageProps {
		width?: number;
		height?: number;
		backgroundColor?: string;
	}

	export default class BoxImage extends Component<BoxImageProps> {}
}
