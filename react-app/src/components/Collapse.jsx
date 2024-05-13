import React, { useState } from 'react';
import cn from 'classnames';

function Collapse({ text = 'collapse me', opened = true }) {
    const [isOpened, setIsOpened] = useState(opened);

    const toggleCollapse = () => {
        setIsOpened(!isOpened);
    };

    const isShow = cn('collapse', { 'show': isOpened });

    const isExpanded = isOpened ? 'true' : 'false';

    return (
        <div className='container'>
            <p>
                <a className="btn btn-primary mt-5" data-bs-toggle="collapse" href="#" role="button"
                   aria-expanded={isExpanded} onClick={toggleCollapse}>Link with href</a>
            </p>
            <div className={isShow}>
                <div className="card card-body">
                    {text}
                </div>
            </div>
        </div>
    );
}

export default Collapse;

