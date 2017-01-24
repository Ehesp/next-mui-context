import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export default class extends React.Component {

    render() {
        return (
            <div>
                <p>Render a styled MUI Button: </p>
                <RaisedButton label="Button" primary style={{ margin: 12 }} />
            </div>
        );
    }

    // render() {
    //     return (
    //         <div>
    //             <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    //                 <div>
    //                     <p>Render a styled MUI Button: </p>
    //                     <RaisedButton label="Button" primary style={{ margin: 12 }} />
    //                 </div>
    //             </MuiThemeProvider>
    //         </div>
    //     );
    // }

}
