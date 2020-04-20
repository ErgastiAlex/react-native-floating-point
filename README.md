# Basic Usage

```jsx
import {
  FloatingButton,
  FloatingButtonChild,
} from "react-native-action-floating-button";

const Floating = () => (
  <FloatingButton
    hasChildren={false}
    icon={<Text>{/*Here your Icon*/}</Text>}
    background="blue"
    onPress={() => foo()}
  />
);
```

## Usage With Children

```jsx
import {
  FloatingButton,
  FloatingButtonChild,
} from "react-native-action-floating-button";

const Floating = () => (
  <FloatingButton
    hasChildren={true}
    icon={<Text>{/*Here your Icon*/}</Text>}
    backgroundColor="blue"
  >
    <FloatingButtonChild backgroundColor="blue" title="Tooltip message">
      <Text>{/*Here your Icon*/}</Text>
    </FloatingButtonChild>
  </FloatingButton>
);
```

# Props

### Floating Child

| Options         | Default  | Value                      | How To use                                                              |
| --------------- | -------- | -------------------------- | ----------------------------------------------------------------------- |
| backgroundColor | red      | rgb or hex                 | Use to change the color of the button                                   |
| hasChildren     | true     | true, false                | If true instead of using onPress it opens the floatingButtonChild       |
| onPress         | none     | method                     | Use to change the behavior when it's pressed with hasChildren on false. |
| icon            | none     | Text                       | Use to display some text or icon                                        |
| padding         | 10       | Number                     | Use to add padding                                                      |
| alignItems      | flex-end | flex-start,center,flex-end | Use to choose where you want to put the button                          |
| \[children\]    | none     |                            | Create the FloatingButtonChild as children of a FloatingButton          |
| shadow          | none     | css style                  | Use to set the shadow of the button                                     |

### FloatingButtonChild

| Options         | Default | Value            | How To use                                                    |
| --------------- | ------- | ---------------- | ------------------------------------------------------------- |
| backgroundColor | red     | rgb or hex       | Use to change the color of the button                         |
| title           | none    | string           | Use to change the tooltip                                     |
| \[children\]    | none    |                  | Use to change the icon or text of the button                  |
| shadow          | none    | css style        | Use to set the shadow of the button                           |
| flexDirection   | row     | row, row-reverse | Set to row-reverse to reverse the button and tooltip position |

# Bug

-Shadow Box during the fade in

# ChangeLog:

- Add Shadow on the button
- Implemented button on right position
