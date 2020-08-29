import React from 'react';

export default function WelcomePage() {

  // fake data generator
  const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
      id: `item-${k}`,
      content: `item ${k}`,
    }));

// a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
  });

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }


  return (
    <div className="examples-welcome-page">
      <a href="http://github.com/supnate/rekit">
        <img src={require('../../images/rekit-react.png')} className="app-logo" alt="logo"/>
      </a>
      <h1>Welcome to Rekit!</h1>
      <p>
        Contratulations! You have created your Rekit React app successfully! Seeing this page means
        everything works well now.
      </p>
      <p>
        This is an example feature showing about how to layout the container, how to use Redux and
        React Router. If you want to remove all sample code, just delete the feature from Rekit
        Studio. Alternatively you can run&nbsp;
        <code>"rekit remove feature examples"</code> via command line under the project folder.
      </p>
      <p>
        To learn more about how to get started, you can visit:{' '}
        <a href="http://docs.rekit.org/app-types/rekit-react">Get started</a>
      </p>
    </div>
  );
}
