import template from './index.html'
import { log } from '../../utils'
import { SET_FORCE_TRANSLATION } from '../../store/module/events'
import './index.scss'

export default function (Vue) {
  return {
    template,

    props: {
      /**
       * Remove css style to customize the component more easily
       */
      applyStyle: {
        type: Boolean,
        default: true
      },

      /**
       * Name of the property needs to be displayed in the language list
       */
      label: {
        type: String,
        default: 'name'
      },

      /**
       * Enable it to click & close the translation-tool directly
       * everytime a language is selected for testing
       */
      closeOnClick: {
        type: Boolean,
        default: false
      }
    },

    beforeDestroy () {
      if (!this.visibility) {
        return
      }

      this.$store.dispatch(SET_FORCE_TRANSLATION, false)
    },

    data () {
      return {
        visibility: false,
        buttonEnabled: true,
        selected: null
      }
    },

    computed: {
      isDisabled () {
        return !this.buttonEnabled && this.closeOnClick
      },

      currentLanguage () {
        return this.$store.getters.currentLanguage
      },

      isForced () {
        if (!this.selected) {
          return
        }
        return this.$store.getters.languageFilter.indexOf(this.selected) === -1
      },

      languages () {
        return this.$store.getters.languages
      }
    },

    watch: {
      currentLanguage (value) {
        if (!value) {
          return
        }

        this.selected = value.code
      }
    },

    methods: {
      close () {
        this.visibility = false
      },

      setLanguage (code) {
        this.buttonEnabled = false

        this.$setLanguage(code).then(() => {
          if (this.closeOnClick) {
            this.visibility = false
          }

          this.buttonEnabled = true
        })
      },

      getLabel (language) {
        const label = language[this.label]

        if (!label) {
          log(`"${this.label}" doesn't exist in the language with code "${language.code}"`, 'warn')
          return language.code
        }

        return label
      },

      isActive (code) {
        return this.$store.getters.currentLanguage.code === code
      },

      isVisible (code) {
        return this.$store.getters.currentLanguage.code === code || this.visibility
      },

      toggle () {
        this.visibility = !this.visibility
        this.$store.dispatch(SET_FORCE_TRANSLATION, this.visibility)
      }
    }
  }
}
