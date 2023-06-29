export default function Celltypes (type, commonProps) {
    switch(type) {
        case 'priority':
            return(
                <select {...commonProps}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            );
        case 'state':
            return (
                <select {...commonProps}>
                    <option value="unstarted">Unstarted</option>
                    <option value="in progress">In Progress</option>
                    <option value="complete">Complete</option>
                </select>
            );
        case 'number':
            return(
                <input
                    {...commonProps}
                    type='number'
                />            
            );
        case 'text':
            return(
                <input
                    {...commonProps}
                    type='text'
                />            
            );
        case 'date':
            return(
                <input
                    {...commonProps}
                    type='date'
                />            
            );
        default:
            break;
    }
}