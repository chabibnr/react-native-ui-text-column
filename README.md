# TextColumn

#Installation
```npm i react-native-ui-text-column```
#example
```
import React from 'react';
import {Text, View} from 'react-native';

import TextColumn from 'react-native-ui-text-column';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 15}}>Dinamis 4 kolom</Text>
                    <TextColumn items={[
                        {title: 'Stok', value: 7},
                        {title: 'Terjual', value: 100},
                        {title: 'Peminat', value: 90},
                        {title: 'Dilihat', value: 7000}
                    ]} onItemPress={(index, item) => {
                        alert(JSON.stringify(item));
                    }}/>
                </View>

                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 15}}>Dinamis 3 kolom</Text>
                    <TextColumn items={[
                        {title: 'Stok', value: 7},
                        {title: 'Terjual', value: 100},
                        {title: 'Peminat', value: 90}
                    ]} onItemPress={(index, item) => {
                        alert(JSON.stringify(item));
                    }}/>
                </View>
            </View>
        );
    }
}
```
#screenshot