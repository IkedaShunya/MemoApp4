import { Redirect } from "expo-router";
import React from 'react';

const Index = (): React.JSX.Element => {
    return <Redirect href={'memo/detail'} />
}

export default Index