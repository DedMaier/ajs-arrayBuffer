[![Build status](https://ci.appveyor.com/api/projects/status/gov8nbk8av7psura?svg=true)](https://ci.appveyor.com/project/DedMaier/ajs-arraybuffer)
## `ArrayBuffer` 

### Легенда

Периодически данные приходят в бинарном формате, и их необходимо преобразовать в другой формат, например, строку JSON, чтобы потом распарсить в объект. Для этих манипуляций можно использовать объекты, которые предоставляются Web API — `File` и `Blob`, но прямая манипуляция `ArrayBuffer` будет в разы быстрее и эффективнее.

### Описание

У вас есть функция `getBuffer()`, которая эмулирует создание объекта типа `ArrayBuffer`. Вам необходимо реализовать класс `ArrayBufferConverter` с методом `load()`, который может загружать данные (сигнатура `load(buffer)`), и методом `toString`, который умеет переводить содержимое загруженного `ArrayBuffer` в строку.

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

Не забудьте написать Unit-тесты, которые обеспечивают 100-процентное покрытие тестируемых функций и классов.

---
