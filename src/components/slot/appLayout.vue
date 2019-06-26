<template>
    <div class="container">
        <header>
          <slot name="header">默认标题</slot>
          <slot name="small-header">默认标题</slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
</template>