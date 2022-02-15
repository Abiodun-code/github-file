import React from 'react';
import FileIcon from './FileIcon';
import PropTypes from 'prop-types';

function FileName({file}) {
    return (
        <>
            <FileIcon file={file}/>
            <td className="file-name">{file.name}</td>
        </>

    );
}

FileName.propTypes = {
    file: PropTypes.object.isRequired
};
    

export default FileName;