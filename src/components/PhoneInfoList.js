import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data : []
    }
    
    render() {
        const { data } = this.props;

       // if(!data) return null;//data가 없다면 리턴

        const list = data.map(
            info => (<PhoneInfo info = {info} key={ info.id}/>)
        ); //info의 배열을 phoneinfo컴포넌트로 변환
        //key값이 없어도 렌더링은 되지만 key가 있어야 추가, 제거시에 인덱스와 다르게 각 데이터의 고유값을 줄 수 있다
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;