# NgxSmile

## How to

Hey hello you !

### Basic

Import NgxSmileModule into your app :
``` 
import { NgxSmileModule } from 'ngx-smile';
 ```

Then just, as in the examples, use it :
```
<ngx-smile threshold="1"></ngx-smile>
```

The only required parameter is "threshold", and it should be between `-1` and `1`, `-1` is sad, `1` is happy..
The smile will depend on it.

### More

There is a debug mode that allows you to play with the parameters :
```<ngx-smile threshold="1" showDebug="true"></ngx-smile>```


## Examples
![](https://github.com/RomainFleury/ngx-smile/blob/master/example.png?raw=true)

