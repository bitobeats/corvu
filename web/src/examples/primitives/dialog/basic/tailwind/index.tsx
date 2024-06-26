import Dialog from '@corvu/dialog'
import type { VoidComponent } from 'solid-js'

const DialogExample: VoidComponent = () => {
  return (
    <Dialog>
      <Dialog.Trigger class="my-auto rounded-lg bg-corvu-100 px-4 py-3 text-lg font-medium transition-all duration-100 hover:bg-corvu-200 active:translate-y-0.5">
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class="fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content class="fixed left-1/2 top-1/2 z-50 min-w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-corvu-400 bg-corvu-100 px-6 py-5 duration-200 corvu-open:animate-in corvu-open:fade-in-0 corvu-open:zoom-in-95 corvu-open:slide-in-from-left-1/2 corvu-open:slide-in-from-top-[60%] corvu-closed:animate-out corvu-closed:fade-out-0 corvu-closed:zoom-out-95 corvu-closed:slide-out-to-left-1/2 corvu-closed:slide-out-to-top-[60%]">
          <Dialog.Label class="text-lg font-bold">
            Survey about SolidJS
          </Dialog.Label>
          <Dialog.Description class="mt-2">
            Tell us what you like about Solid the most!
          </Dialog.Description>
          <textarea class="mt-3 w-full rounded border-2 border-corvu-400 bg-corvu-100 focus:outline-none" />
          <div class="mt-3 flex justify-between">
            <Dialog.Close class="rounded-md bg-corvu-200 px-3 py-2">
              Cancel
            </Dialog.Close>
            <Dialog.Close class="rounded-md bg-corvu-300 px-3 py-2 font-bold">
              Submit
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}

export default DialogExample
