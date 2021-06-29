import React from 'react';
import PropTypes from 'prop-types';
import { Editor as TinyMCE } from '@tinymce/tinymce-react';

let defaultPlugins = [
    'advlist autolink lists link image charmap print preview anchor hr',
    'searchreplace visualblocks fullscreen',
    'insertdatetime table paste code wordcount'
];
let defaultMenubar = 'file edit view insert format tools table tc';
let defaultToolbar = [
    'formatselect bold italic underline forecolor',
    'alignleft aligncenter alignright alignjustify bullist numlist outdent indent',
    'link',
    'undo redo',
    'hr fullscreen',
].join('|');
let defaultOptions = {
    menubar: 'edit insert format table'
}

// apiKey for TinyMCE
let apiKey = 'jmqj7w1ihjd7561wrckugckoxwytq694mx57h29bonaq86it';

class Editor extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        const { value, onChange, plugins, menubar, toolbar, options = {}, ...props } = this.props;
        let initOptions = Object.assign({}, defaultOptions, options);

        return (
            <TinyMCE
                {...props}
                apiKey={ apiKey }
                initialValue={ value }
                init={{
                    plugins: typeof plugins !== 'undefined' ? plugins : defaultPlugins,
                    menubar: typeof menubar !== 'undefined' ? menubar : defaultMenubar,
                    toolbar: typeof toolbar !== 'undefined' ? toolbar : defaultToolbar,
                    ...initOptions,
                }}
                onEditorChange={ onChange } />
        );
    }
}

Editor.config = key => apiKey = key;
Editor.setDefaultPlugins = plugins => defaultPlugins = plugins;
Editor.setDefaultMenubar = menubar => defaultMenubar = menubar;
Editor.setDefaultToolbar = toolbar => defaultToolbar = toolbar;
Editor.setDefaultOptions = options => defaultOptions = options;

Editor.propTypes = {
    plugins: PropTypes.array,
    toolbar: PropTypes.string,
    menubar: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool ]),
    onChange: PropTypes.func,
    value: PropTypes.string,
}

export default Editor;