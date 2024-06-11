import React from "react";
import {Button} from "react-bootstrap";
import classNames from "classnames";

function Buttons ({handleReset, clearTodos, isDisabled}) {
    const btnClasses = (enabledClass) => classNames('btn',{
        [enabledClass]: !isDisabled,
        'btn-secondary': isDisabled,
    });
    return (
        <div className='d-flex justify-content-between'>
            <div>
                <Button
                    type='submit'
                    className={btnClasses('btn-primary')}
                    disabled={isDisabled}>
                    Create Task!
                </Button>
                <Button
                    type='reset'>
                    className={btnClasses('btn-warning')}
                    onClick={handleReset}
                    disabled={isDisabled}
                    Очистить
                </Button>
            </div>
            <Button
                type='button'>
                className={btnClasses('btn-danger')}
                onClick={clearTodos}
                disabled={isDisabled}
                Удалить все
            </Button>
        </div>
    )
}
export default Buttons;
