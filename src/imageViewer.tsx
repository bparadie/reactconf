import React = require('react/addons');

interface Props {
	index: number;
}

interface ImageViewerElement
{
    className: string;
}

class ImageViewer extends React.Component<Props, any> {
	static defaultProps: Props = { index: 0 };

    static propTypes: React.ValidationMap<Props> = { index: React.PropTypes.number.isRequired };

	public render(): React.ReactDOMElement<ImageViewerElement> {
		return React.jsx(`
		<div className="photos">
			<React.addons.CSSTransitionGroup transitionName="photo">
				<img key={this.props.index}
				     src={"photos/"+this.props.index+'.jpg'} />
			</React.addons.CSSTransitionGroup>
		</div> `);
	}
}

export = ImageViewer;
