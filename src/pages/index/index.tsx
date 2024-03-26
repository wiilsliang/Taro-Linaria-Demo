import { styled } from "@linaria/react";
import { View } from "@tarojs/components";

const MyView = styled(View)`
  background: grey;
  font-size: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .txt {
    color: green;
  }
  .txt2 {
    color: yellow;
  }
`;
export default () => (
  <MyView>
    <View className="txt">Hello world</View>
    <View className="txt2">taro linalria配置真操蛋</View>
  </MyView>
);
