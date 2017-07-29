/**
    * @author Chabib Nurozak <chabibdev@gmail.com>
    * @link
    * @version 1.0
 */

'use strict';
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';

export default class TextColumn extends Component{
    static propTypes = {
        items: PropTypes.array.isRequired,
        staticWidth: PropTypes.bool,
        itemWidth: PropTypes.number,
        onItemPress : PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            itemWidth: 100,
        };
    }

    componentWillMount(){
        this._gridItemWidth();
    }

    _gridItemWidth() {
        const staticWidth = this.props.staticWidth || false;
        if (staticWidth) {
            const gridWidth = this.props.gridWidth || 100;
            this.setState({'itemWidth': gridWidth});
        } else {
            const {width} = Dimensions.get('window');
            this.setState({'itemWidth': width / this._getItemTotal() });
        }
    }

    _getItemTotal(){
        return this.props.items.length;
    }

    _renderItems(){
        return this.props.items.map(function (item, i) {
            return (
                <TouchableOpacity key={i} style={[styles.rootItem, {width: this.state.itemWidth}, (i === (this._getItemTotal() - 1) ? {} : styles.divider)]}  onPress={() => {
                    this.props.onItemPress(i, item)
                }}>
                    <Text style={styles.primaryText}>{item.title}</Text>
                    <Text style={styles.subText}>{item.value}</Text>
                </TouchableOpacity>
            );
        }.bind(this));
    }

    render(){
        return(
            <View style={styles.container}>
                {this._renderItems()}
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 8
    },
    rootItem:{
        flex: 1,
        height: 40,
        padding: 4,
        justifyContent: 'center',
    },
    divider:{
        borderRightWidth: .51,
        borderRightColor: '#ccc',
        paddingRight: 4,
        marginRight: 4
    },
    primaryText:{
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    subText:{
        textAlign: 'center',
        fontSize: 12
    }
});