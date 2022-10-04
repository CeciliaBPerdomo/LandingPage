import React from 'react';

const Jumbotron = () => {
    return (
        <div className="jumbotron bg-success p-2 text-dark bg-opacity-10">
            <h1 className="display-4 d-flex justify-content-start">A warm Welcome!</h1>
            <p className="lead text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <a type="button" className="btn btn-primary">Call to action!</a>
        </div>
    )
}

export default Jumbotron;