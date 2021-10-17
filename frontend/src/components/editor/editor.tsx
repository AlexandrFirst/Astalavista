import React from 'react';
import styles from './editor.module.scss';
import SunEditor, {buttonList} from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css';
import {useActions} from "../../hooks/useActions"; // Import Sun Editor's CSS File


const Editor = () => {
    const editor = React.useRef<SunEditorCore>();
    const {uploadMedia} = useActions()

    // The sunEditor parameter will be set to the core suneditor instance when this function is called
    const getSunEditorInstance = (sunEditor: SunEditorCore) => {
        editor.current = sunEditor;
    };

    const onImageUploadBefore = (files: Array<File>, info: any, uploadHandler: any) => {
        uploadMedia(files[0], "photo");
    }

    return (
        <div className={styles.wrapper}>
            <SunEditor
                getSunEditorInstance={getSunEditorInstance}
                setOptions={{
                    buttonList: buttonList.complex,
                }}
                onImageUploadBefore={onImageUploadBefore}
            />
        </div>
    );
};

export default Editor;