// select options
function selectOpts() {
    const selectWrapper = document.querySelectorAll('.select__wrapper');
    selectWrapper.forEach(function (wrapper) {
        const selectView = wrapper.querySelector('.select__view');
        const selectOpts = wrapper.querySelector('.select__opts');
        const sOptions = selectOpts.querySelectorAll('.opt');
        // current value
        let currentVal = sOptions[0].getAttribute('data-value');
        // default view
        viewCurrent(currentVal);

        // options
        sOptions.forEach(function (opt) {
            opt.addEventListener('click', function () {
                currentVal = this.getAttribute('data-value');
                selectView.querySelector('.txt').textContent = this.textContent;
                viewCurrent(currentVal);
            });
        });
    });
}
selectOpts();

// view current
function viewCurrent(currentVal) {
    const currentView = document.getElementById('currentView');
    const codeViewer = currentView.querySelector('.code__viewer');
    const codeView = codeViewer.querySelector('.code__view code');
    const count__bar = currentView.querySelector('.count__bar');

    const domElem = `<span class="ope">const</span> <span class="sl">element</span> = <span class="sl">document</span><span class="join">.</span><span class="que">querySelector</span><span class="join">(</span><span class="sin">'.'</span><span class="join">);</span>

<span class="sl">element</span><span class="join">.</span><span class="que">addEventListener</span><span class="join">(</span><span class="sin">"${currentVal}"</span>, <span class="ope">function</span><span class="brt">(</span><span class="brt">)</span> <span class="brt">{</span>
    <span class="sl">this</span>.style.color = red;
<span class="brt">}</span><span class="join">)</span>;
`;
    // inset html
    codeView.innerHTML = domElem;

    // count line
    function setLineCount() {
        const lineLn = codeViewer.innerText.match(/\n/g).length;
        count__bar.innerHTML = '';
        for (let i = 0; i < lineLn; i++) {
            count__bar.innerHTML += `<span class="count">${i + 1}</span>`;
        }
    }
    setLineCount();
    codeView.addEventListener('keyup', setLineCount);
}
