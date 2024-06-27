//компонент вищого порядку, використовується як обгортка для переданого компонента
const BaseTemplate = ({className = null, children}) => {

    return (
        <main className={className}>
            {children}
        </main>
    )

}

export default BaseTemplate;
