import EditorJS from '@editorjs/editorjs';
import RawTool from '@editorjs/raw';
import SimpleImage from "@editorjs/simple-image";
import NestedList from '@editorjs/nested-list';

const editor = new EditorJS({
  /**
   * Id of Element that should contain the Editor
   */
  holderId : 'editorjs',

  /**
   * Available Tools list.
   * Pass Tool's class or Settings object for each Tool you want to use
   */
  tools: {
    raw: RawTool,
    image: SimpleImage,
		list: {
      class: NestedList,
      inlineToolbar: true,
      config: {
        defaultStyle: 'unordered'
      },
    },
  },

	i18n: {
    /**
     * @type {I18nDictionary}
     */
    messages: {
      /**
       * Other below: translation of different UI components of the editor.js core
       */
      ui: {
        "blockTunes": {
          "toggler": {
            "Click to tune": "Натисніть, щоб налаштувати",
            "or drag to move": "Або перетягніть"
          },
        },
        "inlineToolbar": {
          "converter": {
            "Convert to": "Конвертувати в"
          }
        },
        "toolbar": {
          "toolbox": {
            "Add": "Додати"
          }
        }
      },
  
      /**
       * Section for translation Tool Names: both block and inline tools
       */
      toolNames: {
        "Text": "Параграф",
        "Heading": "Заголовок",
        "List": "Список",
        "Warning": "Примітка",
        "Checklist": "Чеклист",
        "Quote": "Цитата",
        "Code": "Код",
        "Delimiter": "Розділювач",
        "Raw HTML": "HTML-фрагмент",
        "Table": "Таблиця",
        "Link": "Посилання",
        "Marker": "Маркер",
        "Bold": "Напівжирний",
        "Italic": "Курсив",
        "InlineCode": "Моноширинный",
      },
  
      /**
       * Section for passing translations to the external tools classes
       */
      tools: {
        /**
         * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
         * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
         */
        "warning": { // <-- 'Warning' tool will accept this dictionary section
          "Title": "Назва",
          "Message": "Повідомлення",
        },
  
        /**
         * Link is the internal Inline Tool
         */
        "link": {
          "Add a link": "Вставте посилання"
        },
        /**
         * The "stub" is an internal block tool, used to fit blocks that does not have the corresponded plugin
         */
        "stub": {
          'The block can not be displayed correctly.': 'Блок не може бути відображений'
        }
      },
  
      /**
       * Section allows to translate Block Tunes
       */
      blockTunes: {
        /**
         * Each subsection is the i18n dictionary that will be passed to the corresponded Block Tune plugin
         * The name of a plugin should be equal the name you specify in the 'tunes' section for that plugin
         *
         * Also, there are few internal block tunes: "delete", "moveUp" and "moveDown"
         */
        "delete": {
          "Delete": "Видалити"
        },
        "moveUp": {
          "Move up": "Перемістити вверх"
        },
        "moveDown": {
          "Move down": "Перемістити вниз"
        }
      },
    }
  },
  /**
   * Previously saved data that should be rendered
   */
});