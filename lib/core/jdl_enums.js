/**
 * Copyright 2013-2018 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see http://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const JDLEnum = require('./jdl_enum');

class JDLEnums {
  constructor() {
    this.enums = new Map();
  }

  add(jdlEnum) {
    const errors = JDLEnum.checkValidity(jdlEnum);
    if (errors.length !== 0) {
      throw new Error(`The enum must be valid in order to be added to the enums.\nErrors: ${errors.join(', ')}`);
    }
    this.enums.set(jdlEnum.name, jdlEnum);
  }

  get(enumName) {
    return this.enums.get(enumName);
  }

  has(enumName) {
    return this.enums.has(enumName);
  }

  size() {
    return this.enums.size;
  }

  forEach(passedFunction, thisArg) {
    if (!passedFunction) {
      return;
    }
    this.enums.forEach(jdlEnum => {
      passedFunction.call(thisArg, jdlEnum);
    });
  }

  toString() {
    let string = '';
    this.enums.forEach(jdlEnum => {
      string += `${jdlEnum.toString()}\n`;
    });
    return string;
  }
}

module.exports = JDLEnums;
