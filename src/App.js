import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MediumEditor from 'medium-editor';
import 'medium-editor/dist/css/medium-editor.min.css';

const editorRef = React.createRef();

const App = props => {

    let [editor, setEditor] = React.useState(null);

    React.useEffect(() => {
        console.log('effect');
        setEditor(new MediumEditor(editorRef.current, {
            toolbar: {
                buttons: [
                    'bold',
                    'italic',
                    'underline',
                    'subscript',
                    'superscript',
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'justifyCenter',
                    'quote',
                    'anchor',
                    'orderedlist',
                    'unorderedlist',
                    'html'
                ]
            },
            anchorPreview: {
                /* These are the default options for anchor preview,
                   if nothing is passed this is what it used */
                hideDelay: 500,
                previewValueSelector: 'a'
            },
            paste: {
                /* This example includes the default options for paste,
                   if nothing is passed this is what it used */
                forcePlainText: true,
                cleanPastedHTML: false,
                cleanReplacements: [],
                cleanAttrs: ['class', 'style', 'dir'],
                cleanTags: ['meta'],
                unwrapTags: []
            },
            imageDragging: true,
            anchor: {
                placeholderText: 'Type a link',
                customClassOption: 'btn',
                customClassOptionText: 'Create Button'
            },
        }))
    }, []);

    return (
        <div className="App" ref={editorRef}>

        </div>
    );
};

export default App;
