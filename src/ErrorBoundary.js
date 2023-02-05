import React from "react";


export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error:null }
       
    }
    
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { error };
    }
    
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log({error, errorInfo});
    }
    
    render() {
        if (this.state.error) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children;
    }
    }