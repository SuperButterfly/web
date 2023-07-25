/**
 * recibe un tag html y retorna los atributos nativos de ese tag
 * @param {*} tagName 
 * @returns  defaultStyles typo object
 */
const addNativeStyles = (tagName) => {
    const defaultStyles = {
        a: {
          color: {active: true,
            value:'blue'},
          textDecoration: {active: true,
            value:'underline'},
        },
        abbr: {
          borderBottom: {active: true,
            value:'1px dotted #000'},
        },
        address: {
          fontStyle: {active: true,
            value:'italic'},
        },
        area: {
          display: {active: true,
            value:'none'},
        },
        article: {
          display: {active: true,
            value:'block'
        }},
        aside: {
          display: {active: true,
            value:'block'},
        },
        audio: {
          display: {active: true,
            value:'inline-block'},
        },
        b: {
          fontWeight: {active: true,
            value:'bold'},
        },
        base: {
          display: {active: true,
            value:'none'},
        },
        bdi: {
          direction: {active: true,
            value:'ltr'},
        },
        bdo: {
          direction: {active: true,
            value:'rtl'},
        },
        blockquote: {
          display: {active: true,
            value:'block'},
          margin: {active: true,
            value:'1em 40px'},
        },
        body: {
            height: {active: true,
                value: '100%'},
            width: {active: true,
                value: '100%'},
            display: {active: true,
                value: 'flex'}
        },
        br: {
          content: {active: true,
            value:'none'},
        },
        button: {
            padding: {active: true,
                value: '8px 16px'},
            borderRadius: {active: true,
                value: '8px'},
            border: {active: true,
                value: '0.5px solid #3333ff'},
            color: {active: true,
                value: '#3333ff'}
          },
        canvas: {
          display: {active: true,
            value:'inline-block'},
        },
        caption: {
          display: {active: true,
            value:'table-caption'},
        },
        cite: {
          fontStyle: {active: true,
            value:'italic'},
        },
        code: {
          fontFamily: {active: true,
            value:'monospace'},
        },
        col: {
          display: {active: true,
            value:'table-column'},
        },
        colgroup: {
          display: {active: true,
            value:'table-column-group'},
        },
        data: {
          display: {active: true,
            value:'inline'},
        },
        datalist: {
          display: {active: true,
            value:'none'},
        },
        dd: {
          display: {active: true,
            value:'block'},
          margin: {active: true,
            value:'0 0 1em 40px'},
        },
        del: {
          textDecoration: {active: true,
            value:'line-through'},
        },
        details: {
          display: {active: true,
            value:'block'},
        },
        dfn: {
          fontStyle: {active: true,
            value:'italic'},
        },
        dialog: {
          display: {active: true,
            value:'none'},
        },
        div: {
            width: {active: true,
                value:  '200px'},
            height: {active: true,
                value: '200px'},
            border: {active: true,
                value: '1px dashed #000'},
            display: {active: true,
                value: 'flex'}
            },
        dl: {
          display: {active: true,
            value:'block'},
        },
        dt: {
          display: {active: true,
            value:'block'},
          fontWeight: {active: true,
            value:'bold'},
        },
        em: {
          fontStyle: {active: true,
            value:'italic'},
        },
        embed: {
          display: {active: true,
            value:'none'},
        },
        fieldset: {
          display: {active: true,
            value:'block'},
          margin: {active: true,
            value:'0 2px'},
          padding: {active: true,
            value:'0.35em 0.625em 0.75em'},
        },
        figcaption: {
          display: {active: true,
            value:'block'},
        },
        figure: {
          display: {active: true,
            value:'block'},
          margin: {active: true,
            value:'1em 40px'},
        },
        footer: {
          display: {active: true,
            value:'block'},
        },
        form: {
          display: {active: true,
            value:'block'},
        },
        h1: {
          fontSize: {active: true,
            value:'2em'},
          fontWeight: {active: true,
            value:'bold'},
          margin: {active: true,
            value:'0.67em 0'},
        },
        h2: {
          fontSize: {active: true,
            value:'1.5em'},
          fontWeight: {active: true,
            value:'bold'},
          margin: {active: true,
            value:'0.83em 0'},
        },
        h3: {
          fontSize: {active: true,
            value:'1.17em'},
          fontWeight: {active: true,
            value:'bold'},
          margin: {active: true,
            value:'1em 0'},
        },
        h4: {
          fontSize: {active: true,
            value:'1em'},
          fontWeight: {active: true,
            value:'bold'},
          margin: {active: true,
            value:'1.33em 0'},
        },
        h5: {
          fontSize: {active: true,
            value:'0.83em'},
          fontWeight: {active: true,
            value:{active: true,
                value:'bold'},
          margin: {active: true,
            value:'1.67em 0'},
        }},
        h6: {
          fontSize: {active: true,
            value:'0.67em'},
          fontWeight: {active: true,
            value:'bold'},
          margin: {active: true,
            value:'2.33em 0'},
        },
        head: {
          display: {active: true,
            value:'none'},
        },
        header: {
          display: {active: true,
            value:'block'},
        },
        hgroup: {
          display: {active: true,
            value:'block'},
        },
        hr: {
          boxSizing: {active: true,
            value:'content-box'},
          height: {active: true,
            value:'0'},
          overflow: {active: true,
            value:'visible'},
        },
        html: {
          display: {active: true,
            value:'block'},
        },
        i: {
          fontStyle: {active: true,
            value:'italic'},
        },
        iframe: {
            width: {active: true,
                value:'320px'},
            height: {active: true,
                value:'200px'},
          
          border: {active: true,
            value:'0'}
          
        },
        img: {
            width: {active: true,
                value:'100px'},
            height: {active: true,
                value:'100px'}
          },
        input: {
          display: {active: true,
            value:'inline-block'},
        },
        ins: {
          textDecoration: {active: true,
            value:'underline'},
        },
        kbd: {
          fontFamily: {active: true,
            value:'monospace'},
        },
        keygen: {
          display: {active: true,
            value:'none'},
        },
        label: {
          display: {active: true,
            value:'inline-block'},
        },
        legend: {
          display: {active: true,
            value:'block'},
          maxWidth: {active: true,
            value:'100%'},
          padding: {active: true,
            value:'0.5em'},
        },
        li: {
          display: {active: true,
            value:'list-item'},
        },
        link: {
          display: {active: true,
            value:'none'},
        },
        main: {
          display: {active: true,
            value:'block'},
        },
        map: {
          display: {active: true,
            value:'inline'},
        },
        mark: {
          backgroundColor: {active: true,
            value:'yellow'},
          color: {active: true,
            value:'black'},
        },
        menu: {
          display: {active: true,
            value:'block'},
        },
        menuitem: {
          display: {active: true,
            value:'block'},
        },
        meta: {
          display: {active: true,
            value:'none'},
        },
        meter: {
          display: {active: true,
            value:'inline-block'},
        },
        nav: {
          display: {active: true,
            value:'block'},
        },
        noscript: {
          display: {active: true,
            value:'none'},
        },
        object: {
          display: {active: true,
            value:'none'},
        },
        ol: {
          display: {active: true,
            value:'block'},
          listStyleType: {active: true,
            value:'decimal'},
          margin: {active: true,
            value:'1em 0'},
          padding: {active: true,
            value:'0 0 0 40px'},
        },
        optgroup: {
          display: {active: true,
            value:'none'},
        },
        option: {
          display: {active: true,
            value:'none'},
        },
        output: {
          display: {active: true,
            value:'inline-block'},
        },
        p: {
          display: {active: true,
            value:'block'},
          marginTop: {active: true,
            value:'1em'},
          marginBottom: {active: true,
            value:'1em'},
          marginLeft: {active: true,
            value:'0'},
          marginRight: {active: true,
            value:'0'},
        },
        param: {
          display: {active: true,
            value:'none'},
        },
        pre: {
          display: {active: true,
            value:'block'},
          fontFamily: {active: true,
            value:'monospace'},
          whiteSpace: {active: true,
            value:'pre'},
          margin: {active: true,
            value:'1em 0'},
        },
        progress: {
          display: {active: true,
            value:'inline-block'},
        },
        q: {
          display: {active: true,
            value:'inline'},
        },
        rp: {
          display: {active: true,
            value:'none'},
        },
        rt: {
          display: {active: true,
            value:'inline'},
        },
        ruby: {
          display: {active: true,
            value:'ruby'},
        },
        s: {
          textDecoration: {active: true,
            value:'line-through'},
        },
        samp: {
          fontFamily: {active: true,
            value:'monospace'},
        },
        script: {
          display: {active: true,
            value:'none'},
        },
        section: {
          display: {active: true,
            value:'block'},
        },
        select: {
          display: {active: true,
            value:'inline-block'},
        },
        small: {
          fontSize: {active: true,
            value:'80%'},
        },
        source: {
          display: {active: true,
            value:'none'},
        },
        span: {
          display: {active: true,
            value:'inline'},
        },
        strong: {
          fontWeight: {active: true,
            value:'bold'},
        },
        style: {
          display: {active: true,
            value:'none'},
        },
        sub: {
          fontSize: {active: true,
            value:'75%'},
        },
        summary: {
          display: {active: true,
            value:'block'},
        },
        sup: {
          fontSize: {active: true,
            value:'75%'},
        },
        table: {
          display: {active: true,
            value:'table'},
          borderCollapse: {active: true,
            value:'collapse'},
          borderSpacing: {active: true,
            value:'0'},
          margin: {active: true,
            value:'1em 0'},
        },
        tbody: {
          display: {active: true,
            value:'table-row-group'},
          verticalAlign: {active: true,
            value:'middle'},
          borderColor: {active: true,
            value:'inherit'},
        },
        td: {
          display: {active: true,
            value:'table-cell'},
          verticalAlign: {active: true,
            value:'inherit'},
        },
        textarea: {
          display: {active: true,
            value:'inline-block'},
        },
        tfoot: {
          display: {active: true,
            value:'table-footer-group'},
          verticalAlign: {active: true,
            value:'middle'},
          borderColor: {active: true,
            value:'inherit'},
        },
        th: {
          display: {active: true,
            value:'table-cell'},
          fontWeight: {active: true,
            value:'bold'},
          verticalAlign: {active: true,
            value:'inherit'},
          textAlign: {active: true,
            value:'inherit'},
        },
        thead: {
          display: {active: true,
            value:'table-header-group'},
          verticalAlign: {active: true,
            value:'middle'},
          borderColor: {active: true,
            value:'inherit'},
        },
        time: {
          display: {active: true,
            value:'inline-block'},
        },
        title: {
          display: {active: true,
            value:'none'},
        },
        tr: {
          display: {active: true,
            value:'table-row'},
          verticalAlign: {active: true,
            value:'inherit'},
          borderColor: {active: true,
            value:'inherit'},
        },
        track: {
          display: {active: true,
            value:'none'},
        },
        u: {
          textDecoration: {active: true,
            value:'underline'},
        },
        ul: {
          display: {active: true,
            value:'block'},
          listStyleType: {active: true,
            value:'disc'},
          margin: {active: true,
            value:'1em 0'},
          padding: {active: true,
            value:'0 0 0 40px'},
        },
        var: {
          fontStyle: {active: true,
            value:'italic'},
        },
        video: {
          display: {
            width: {active: true,
                value:'320px'},
            height: {active: true,
                value:'180px'}
          },
        },
        wbr: {
          display: {active: true,
            value:'none'},
        },
      }

    return defaultStyles[tagName.toLowerCase()]
}

module.exports = { addNativeStyles}
