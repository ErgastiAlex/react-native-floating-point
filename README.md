## Basic Usage

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
    <FloatingButtonChild backgroundColor="blue" tilte="Tooltip message">
      <Text>{/*Here your Icon*/}</Text>
    </FloatingButtonChild>
  </FloatingButton>
);
```

## Props

## Floating Child

<table>
<tr>
       <th>Options</th>
       <th>Default</th>
       <th>How To use</th>
</tr>
<tr>
    <td>backgroundColor</td>
    <td>red</td>
    <td>Use to change the color of the button</td>
</tr>
<tr>
    <td>hasChildren</td>
    <td>true</td>
    <td>If true instead of using onPress it opens the floatingButtonChild</td>
</tr>
<tr>
    <td>onPress</td>
    <td>none</td>
    <td>Use to change the behavior when it's pressed with hasChildren on false.</td>
</tr>
<tr>
    <td>icon</td>
    <td>none</td>
    <td>Use to display some text or icon</td>
</tr>
<tr>
    <td>padding</td>
    <td>10</td>
    <td>Use to add padding</td>
</tr>
<tr>
    <td>alignItems</td>
    <td>flex-end</td>
    <td>Use to choose where you want to put the button</td>
</tr>
<tr>
    <td>[children]</td>
    <td>none</td>
    <td>Create the FloatingButtonChild as children of a FloatingButton</td>
</tr>
</table>

## FloatingButtonChild

<table>
<tr>
       <th>Options</th>
       <th>Default</th>
       <th>How To use</th>
</tr>
<tr>
    <td>backgroundColor</td>
    <td>red</td>
    <td>Use to change the color of the button</td>
</tr>
<tr>
    <td>title</td>
    <td>none</td>
    <td>Use to change the tooltip</td>
</tr>
<tr>
    <td>[children]</td>
    <td>none</td>
    <td>Use to change the icon or text of the button</td>
</tr>
</table>

## Bug

<ul>
    <li>
        <p>Shadow Box during the fade in</p>
    </li>
    <li>
        <p>Right Position not implemented yet</p>
    </li>
</ul>

## ChangeLog:
