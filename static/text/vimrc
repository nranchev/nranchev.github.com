"set guifont="AR PL KaitiM Big5"

" Formatting related settings
set ts=4
set wrap
set smarttab
set tabstop=4
set shiftwidth=4
set smartindent
set sw=4
set lbr
set tw=500
set ai	"Auto indent
set si	"Smart indent
set list
set listchars=eol:¸,tab:»·,trail:·,extends:>,precedes:<
set encoding=utf8

" Menu related
set wildmenu
set laststatus=2
set statusline=%<%f\ \ %y\ \ %l/%L--%P\ \ %m\ \ %a

" Functionalities
set showmatch
set ignorecase
set smartcase
set incsearch
set nocp
set hlsearch
set backspace=eol,start,indent

" Enable syntax and filetype plugins
syntax on
filetype plugin on

" Custom mappings
map <UP> gk
map <DOWN> gj
map <S-Insert> <MiddleMouse>
map! <S-Insert> <MiddleMouse>

" Add some custom types
augroup filetypedetect
au BufNewFile,BufRead *.module set filetype=php
au BufNewFile,BufRead *.install set filetype=php
au BufNewFile,BufRead *.inc set filetype=php
au BufNewFile,BufRead *.psp set filetype=html
au BufNewFile,BufRead *.go set filetype=go
augroup END

" Visual styling, fonts, colors, highlights, etc...
set nolazyredraw
"colorscheme torte
colorscheme sorcerer
set guifont=Monospace\ 11
set nu

if has("gui_running")
	hi Error80        gui=NONE guibg=#171212 "guifg=fg
	hi ErrorLeadSpace gui=NONE guibg=#171212 "guifg=fg
	hi ErrorTailSpace gui=NONE guibg=#171212 "guifg=fg
else
	exec "hi Error80        cterm=NONE   ctermfg=" . <SID>X(79) . " ctermbg=" . <SID>X(32)
	exec "hi ErrorLeadSpace cterm=NONE   ctermfg=" . <SID>X(79) . " ctermbg=" . <SID>X(33)
	exec "hi ErrorTailSpace cterm=NONE   ctermfg=" . <SID>X(79) . " ctermbg=" . <SID>X(33)
endif
syn match ErrorLeadSpace /^ \+/ " highlight any leading spaces
syn match ErrorTailSpace / \+$/ " highlight any trailing spaces
match Error80 /\%>80v.\+/ " highlight anything past 80 in red

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Moving around, tabs and buffers
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Map space to / (search) and c-space to ? (backgwards search)
map <space> /
map <c-space> ?
map <silent> <leader><cr> :noh<cr>

" Close the current buffer
"map <leader>bd :Bclose<cr>

" Close all the buffers
"map <leader>ba :1,300 bd!<cr>

" Use the arrows to something usefull
map <c-right> :bn<cr>
map <c-left> :bp<cr>

" Tab configuration
"map <leader>tn :tabnew<cr>
"map <leader>te :tabedit
"map <leader>tc :tabclose<cr>
"map <leader>tm :tabmove

" When pressing <leader>cd switch to the directory of the open buffer
map <leader>cd :cd %:p:h<cr>

command! Bclose call <SID>BufcloseCloseIt()
function! <SID>BufcloseCloseIt()
   let l:currentBufNum = bufnr("%")
   let l:alternateBufNum = bufnr("#")

   if buflisted(l:alternateBufNum)
     buffer #
   else
     bnext
   endif

   if bufnr("%") == l:currentBufNum
     new
   endif

   if buflisted(l:currentBufNum)
     execute("bdelete! ".l:currentBufNum)
   endif
endfunction

" Specify the behavior when switching between buffers 
try
  set switchbuf=usetab
  set stal=2
catch
endtry
