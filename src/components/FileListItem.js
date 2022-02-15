import React from 'react';
import PropTypes from 'prop-types';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

function FileListItem({file}) {
    return (
        <tr className='file-list-item'>
            <FileName file={file}/>
            <CommitMessage commit={file.latestCommit} />
            <td className="age">
                <Time time={file.updated_at}/>
            </td>
        </tr>
    );
}

FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};


export default FileListItem;