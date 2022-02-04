import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import ArticleIcon from '@mui/icons-material/Article';

const Explorer = ({ data }) => {
  const [expand, setExpand] = React.useState(false);

  const handleClick = () => setExpand(!expand);

  return (
    <>
      <div
        onClick={handleClick}
        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        {data.isDirectory ? <FolderIcon /> : <ArticleIcon />}
        <span
          style={{
            fontWeight: data.isDirectory ? 700 : 400,
            marginBottom: 0,
          }}
        >
          {data.name}
        </span>
      </div>
      <div>
        {data.children && (
          <div
            style={{
              display: expand ? 'inline-block' : 'none',
              paddingLeft: '1rem',
            }}
          >
            {data.children.map((item, key) => (
              <Explorer data={item} key={key} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Explorer;
