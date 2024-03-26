import { css } from "@linaria/core";
import { View, Text } from "@tarojs/components";

const styles = css`
  background: red;
  font-size: 44px;
`;
export default () => (
  <View className={styles}>
    <Text>Hello world!</Text>
    <Text>Taro UI 支持 Vue 了吗？</Text>
    <Text>共建？</Text>
  </View>
);
